import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getminmaxdata } from "./getdata.service.js";
import Moment from 'moment';

export const Minmax = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const yesterday =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);
  const twodaysago =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 2);
  const today1 =
    Moment().format("Do MMM YYYY")
  const yesterday1 =
    Moment().subtract(1, 'day').format("Do MMM YYYY")
  const twodaysago1 =
    Moment().subtract(2, 'day').format("Do MMM YYYY")

  const [date, setdate] = React.useState(today);
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    getminmaxdata(date).then((response) => {
      console.log(response);
      getData(response);
    });
  }, [date]);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     getminmaxdata(date).then((response) => {
  //       console.log(response);
  //       getData(response);
  //       });
  //       }, 20000);
  //     }, [date]);

  return (
    <main>
      
      <select
        className="form-select"
        value={date} 
        onChange={(event) => {
          setdate(event.target.value);
        }}
      >
        <option value={today}>{today1}</option>
        <option value={yesterday}>{yesterday1}</option>
        <option value={twodaysago}>{twodaysago1}</option>
      </select>
      
        <div className="item-container">
          {data.map((item) => (
            <div className="card">
              <div className="card-title">
              {item.sym}
              </div>
              <div class="card-footer border" >
                Maximum:<br/>${item.Max.toFixed(2).toLocaleString(navigator.language, {minimumFractionDigits: 0})}
                </div>
                <div class="card-footer border">
                Minimum:<br/>${item.Min.toFixed(2).toLocaleString(navigator.language, {minimumFractionDigits: 0})}
                </div>
            </div>
          ))}
        </div>
      
    </main>
  );
};
