import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { hightrade, hightraderdb, hightradehdb } from "./getdata.service.js";

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
  const [startTime, setStartTime] = React.useState("00:00");
  const [endTime, setEndTime] = React.useState(hour + ":00");
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    let todayHigh = hightraderdb(startTime, endTime).then((response) => {
      return response;
    });
    let yesterdayHigh = hightradehdb(yesterday, startTime, endTime).then(
      (response) => {
        return response;
      }
    );
    let twoDaysAgoHigh = hightradehdb(twodaysago, startTime, endTime).then(
      (response) => {
        return response;
      }
    );
    if (startDate === endDate) {
      if (startDate === today) {
        console.log(todayHigh);
        getData(todayHigh);
      }
      if (startDate === yesterday) {
        getData(yesterdayHigh);
      } else {
        getData(twoDaysAgoHigh);
      }
    }
    if (startDate > endDate) {
      console.log("Invalid input");
    } else {
      if (endDate === today && startDate === twodaysago) {
        if (todayHigh[0].volume > yesterdayHigh[0].volume) {
          if (todayHigh[0].volume > twoDaysAgoHigh[0].volume) {
            getData(todayHigh);
          }
        } else {
          if (yesterdayHigh[0].volume > twoDaysAgoHigh[0].volume) {
            getData(yesterdayHigh);
          } else {
            getData(twoDaysAgoHigh);
          }
        }
      }
      if (endDate === today && startDate === yesterday) {
        if (todayHigh[0].volume > yesterdayHigh[0].volume) {
          getData(todayHigh);
        } else {
          getData(yesterdayHigh);
        }
      } else {
        if (yesterdayHigh[0].volume > twoDaysAgoHigh[0].volume) {
          getData(yesterdayHigh);
        } else {
          getData(twoDaysAgoHigh);
        }
      }
    }
  }, [
    endDate,
    endTime,
    startDate,
    startTime,
    today,
    twodaysago,
    yesterday,
  ]);

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
        value={startTime}
        className="form-control"
        placeholder="Time"
        onChange={(event) => {
          setStartTime(event.target.value);
        }}
      />
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
        {data.map((item) => (
          <div className="card">
            <div className="sum-card-title">Most Traded Sym</div>
            <div class="sum-card-footer border">
              Sym:
              <br />
              {item.sym}
            </div>
            <div class="sum-card-footer border">
              Volume:
              <br />
              {item.volume}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
