import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { hightrade } from "./getdata.service.js";

export const Summary = () => {
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
    hightrade(date).then((response) => {
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

      <div className="summary-container">
        {data.map((item) => (
          <div className="card">
            <div className="sum-card-title">Most Traded Sym</div>
            <div class="sum-card-footer border">
              Sym:
              <br />{item.sym}
            </div>
            <div class="sum-card-footer border">
              Volume:
              <br />{item.volume}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
