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
        <h1>MinMax</h1>
        <div className="item-container">
          {data.map((item) => (
            <div className="card">
              <h3>{item.sym}</h3>
              <p>
                Max:£{item.Max.toFixed(2)} Min:£{item.Min.toFixed(2)}
              </p>
              {/* <p>{item.Min}</p> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
