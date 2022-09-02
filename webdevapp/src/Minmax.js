import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getminmaxdata } from "./getdata.service.js";

export const Minmax = () => {
  let day = new Date();
  const today =
    ("0" + (day.getDate())).slice(-2).toString() + "." + ("0" + (day.getMonth() + 1)).slice(-2).toString() + "." + day.getFullYear();
  const yesterday =
    ("0" + (day.getDate() - 1)).slice(-2).toString() + "." + ("0" + (day.getMonth() + 1)).slice(-2).toString() + "." + day.getFullYear();
  const twodaysago =
    ("0" + (day.getDate() - 2)).slice(-2).toString() + "." + ("0" + (day.getMonth() + 1)).slice(-2).toString() + "." + day.getFullYear();

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
        <option value={today}>{today}</option>
        <option value={yesterday}>{yesterday}</option>
        <option value={twodaysago}>{twodaysago}</option>
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
