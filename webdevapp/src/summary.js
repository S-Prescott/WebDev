import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { hightrade, hightraderdb, hightradehdb } from "./getdata.service.js";
import { Minmax } from "./Minmax.js";

export const Summary = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const yesterday =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);
  const twodaysago =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 2);
  const hour = day.getHours();

  const [date, setdate] = React.useState(today);
  const [startDate, setStartDate] = React.useState(today);
  const [endDate, setEndDate] = React.useState(today);
  const [startTime, setStartTime] = React.useState("15:00");
  const [endTime, setEndTime] = React.useState("17:00");
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    const syms = [
      "APPL",
      "AIG",
      "AMD",
      "DELL",
      "DOW",
      "GOOG",
      "HPQ",
      "IBM",
      "INTC",
      "MSFT",
    ];
    if (startDate === today) {
      hightraderdb(startTime, endTime).then((response) => {
        let arr = [];
        for (let i in response) {
          arr.push(response[i].volume);
        }
        let max = Math.max(...arr);
        let index = arr.indexOf(max);
        getData(response[index]);
      });
    }
    if (startDate > endDate) {
      console.log("error");
    }
    if (startDate === yesterday && endDate === today) {
      let arr1 = [];
      let arr2 = [];
      hightradehdb(yesterday, startTime, "23:59:59").then((response) => {
        for (let i in response) {
          arr1.push(response[i].volume);
        }
        hightraderdb("00:00", endTime).then((response) => {
          for (let i in response) {
            arr2.push(response[i].volume);
          }
        });
        let sum = arr1.map(function (num, idx) {
          return num + arr2[idx];
        });
        console.log(sum);
        let max = Math.max(...sum);
        let index = sum.indexOf(max);
        let sym = syms[index];
        getData({ volume: max, sym: sym });
      });
    }
  }, [endDate, endTime, startDate, startTime, today, yesterday]);

  return (
    <main>
      <select
        className="form-select"
        value={startDate}
        onChange={(event) => {
          setStartDate(event.target.value);
        }}
      >
        <option value={today}>{today}</option>
        <option value={yesterday}>{yesterday}</option>
        <option value={twodaysago}>{twodaysago}</option>
      </select>
      <input
        type="time"
        step="1"
        value={startTime}
        className="form-control"
        placeholder="Time"
        onChange={(event) => {
          setStartTime(event.target.value);
        }}
      />
      <select
        className="form-select"
        value={endDate}
        onChange={(event) => {
          setEndDate(event.target.value);
        }}
      >
        <option value={today}>{today}</option>
        <option value={yesterday}>{yesterday}</option>
        <option value={twodaysago}>{twodaysago}</option>
      </select>

      <input
        type="time"
        step="1"
        value={endTime}
        className="form-control"
        placeholder="Time"
        onChange={(event) => {
          setEndTime(event.target.value);
        }}
      />
      <div className="summary-container">
        {/* {data.map((item) => ( */}
        <div className="card">
          <div className="sum-card-title">Most Traded Sym</div>
          <div class="sum-card-footer border">
            Sym:
            <br />
            {data.sym}
          </div>
          <div class="sum-card-footer border">
            Volume:
            <br />
            {data.volume}
          </div>
        </div>
        {/* ))} */}
      </div>
    </main>
  );
};
