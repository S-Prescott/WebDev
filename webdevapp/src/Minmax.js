import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getminmaxdata } from "./getdata.service.js";

export const Minmax = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const yesterday =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);
  const twodaysago =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 2);

  const [date, setdate] = React.useState(today);
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    getminmaxdata(date).then((response) => {
      console.log(response);
      getData(response);
    });
  }, [date]);

  return (
    <main>
      <h1>MinMax</h1>
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
      <div>
        
        <div className="item-container border">
          {data.map((item) => (
            <div className="card ">
              <div className="card-title">
              {item.sym}
              </div>
              <div class="card-footer border" >
              Max:<br/>£ {item.Max.toFixed(2)}
                </div>
                <div class="card-footer border">
                Min:<br/>£ {item.Min.toFixed(2)}
                </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
