import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { hightrade, hightraderdb, hightradehdb } from "./getdata.service.js";
import { Minmax } from "./Minmax.js";
import Moment from "moment";

export const Summary = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const yesterday =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);
  const twodaysago =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 2);
  const today1 = Moment().format("Do MMM YYYY");
  const yesterday1 = Moment().subtract(1, "day").format("Do MMM YYYY");
  const twodaysago1 = Moment().subtract(2, "day").format("Do MMM YYYY");
  const hour = day.getHours();

  const [date, setdate] = React.useState(today);
  const [startDate, setStartDate] = React.useState(today);
  const [endDate, setEndDate] = React.useState(today);
  const [startTime, setStartTime] = React.useState("00:00");
  const [endTime, setEndTime] = React.useState("23:59");
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
    if (startDate === endDate) {
      if (startTime >= endTime) {
        console.log("error");
      } else {
        if (startDate === today) {
          hightraderdb(startTime, endTime).then((response) => {
            let arr = [];
            for (let i in response) {
              arr.push(response[i].volume);
            }
            let index = [];
            let sym = [];
            let max = [];
            for (let i = 0; i < 3; i++) {
              max.push(Math.max(...arr));
              index.push(arr.indexOf(max[i]));
              sym.push(syms[index[i]]);
              arr[index[i]] = 0;
            }
            getData({
              volume1: max[0].toLocaleString("en-US"),
              volume2: max[1].toLocaleString("en-US"),
              volume3: max[2].toLocaleString("en-US"),
              sym1: sym[0],
              sym2: sym[1],
              sym3: sym[2],
            });
          });
        }
        if (startDate === yesterday) {
          hightradehdb(yesterday, startTime, endTime).then((response) => {
            let arr = [];
            for (let i in response) {
              arr.push(response[i].volume);
            }
            let index = [];
            let sym = [];
            let max = [];
            for (let i = 0; i < 3; i++) {
              max.push(Math.max(...arr));
              index.push(arr.indexOf(max[i]));
              sym.push(syms[index[i]]);
              arr[index[i]] = 0;
            }
            getData({
              volume1: max[0].toLocaleString("en-US"),
              volume2: max[1].toLocaleString("en-US"),
              volume3: max[2].toLocaleString("en-US"),
              sym1: sym[0],
              sym2: sym[1],
              sym3: sym[2],
            });
          });
        }
        if (startDate === twodaysago) {
          hightradehdb(twodaysago, startTime, endTime).then((response) => {
            let arr = [];
            for (let i in response) {
              arr.push(response[i].volume);
            }
            let index = [];
            let sym = [];
            let max = [];
            for (let i = 0; i < 3; i++) {
              max.push(Math.max(...arr));
              index.push(arr.indexOf(max[i]));
              sym.push(syms[index[i]]);
              arr[index[i]] = 0;
            }
            getData({
              volume1: max[0].toLocaleString("en-US"),
              volume2: max[1].toLocaleString("en-US"),
              volume3: max[2].toLocaleString("en-US"),
              sym1: sym[0],
              sym2: sym[1],
              sym3: sym[2],
            });
          });
        }
      }
    } else {
      if (startDate > endDate) {
        console.log("error");
      } else {
        if (startDate === yesterday && endDate === today) {
          let arr1 = [];
          let arr2 = [];
          hightradehdb(yesterday, startTime, "23:59:59").then((response) => {
            for (let i in response) {
              arr1.push(response[i].volume);
            }
          });
          hightraderdb("00:00:00", endTime).then((response) => {
            for (let i in response) {
              arr2.push(response[i].volume);
            }
          });
          let sum = [];
          setTimeout(() => {
            for (let i in arr1) {
              sum.push(arr1[i] + arr2[i]);
            }
            let index = [];
            let sym = [];
            let max = [];
            for (let i = 0; i < 3; i++) {
              max.push(Math.max(...sum));
              index.push(sum.indexOf(max[i]));
              sym.push(syms[index[i]]);
              sum[index[i]] = 0;
            }
            getData({
              volume1: max[0].toLocaleString("en-US"),
              volume2: max[1].toLocaleString("en-US"),
              volume3: max[2].toLocaleString("en-US"),
              sym1: sym[0],
              sym2: sym[1],
              sym3: sym[2],
            });
          }, 500);
        }
        if (startDate === twodaysago && endDate === yesterday) {
          let arr1 = [];
          let arr2 = [];
          hightradehdb(twodaysago, startTime, "23:59:59").then((response) => {
            for (let i in response) {
              arr1.push(response[i].volume);
            }
          });
          hightradehdb(yesterday, "00:00:00", endTime).then((response) => {
            for (let i in response) {
              arr2.push(response[i].volume);
            }
          });
          let sum = [];
          setTimeout(() => {
            for (let i in arr1) {
              sum.push(arr1[i] + arr2[i]);
            }
            let index = [];
            let sym = [];
            let max = [];
            for (let i = 0; i < 3; i++) {
              max.push(Math.max(...sum));
              index.push(sum.indexOf(max[i]));
              sym.push(syms[index[i]]);
              sum[index[i]] = 0;
            }
            getData({
              volume1: max[0].toLocaleString("en-US"),
              volume2: max[1].toLocaleString("en-US"),
              volume3: max[2].toLocaleString("en-US"),
              sym1: sym[0],
              sym2: sym[1],
              sym3: sym[2],
            });
          }, 500);
        }
        if (startDate === twodaysago && endDate === today) {
          let arr1 = [];
          let arr2 = [];
          let arr3 = [];
          hightradehdb(twodaysago, startTime, "23:59:59").then((response) => {
            for (let i in response) {
              arr1.push(response[i].volume);
            }
          });
          hightradehdb(yesterday, "00:00:00", "23:59:59").then((response) => {
            for (let i in response) {
              arr2.push(response[i].volume);
            }
          });
          hightraderdb("00:00:00", endTime).then((response) => {
            for (let i in response) {
              arr3.push(response[i].volume);
            }
          });
          let sum = [];
          setTimeout(() => {
            for (let i in arr1) {
              sum.push(arr1[i] + arr2[i] + arr3[i]);
            }
            let index = [];
            let sym = [];
            let max = [];
            for (let i = 0; i < 3; i++) {
              max.push(Math.max(...sum));
              index.push(sum.indexOf(max[i]));
              sym.push(syms[index[i]]);
              sum[index[i]] = 0;
            }
            getData({
              volume1: max[0].toLocaleString("en-US"),
              volume2: max[1].toLocaleString("en-US"),
              volume3: max[2].toLocaleString("en-US"),
              sym1: sym[0],
              sym2: sym[1],
              sym3: sym[2],
            });
          }, 500);
        }
      }
    }
  }, [endDate, endTime, startDate, startTime, today, twodaysago, yesterday]);


  return (
    <main>
      <div class="row" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "10px", marginRight: "10px" }}>
        <div class="col-sm-6">
          <p style={{ fontSize: "20px" }}>Start Date/Time</p>
          <select
            className="form-select"
            value={startDate}
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
          >
            <option value={today}>{today1}</option>
            <option value={yesterday}>{yesterday1}</option>
            <option value={twodaysago}>{twodaysago1}</option>
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
            style={{ textAlign: "center" }}
          />
        </div>
        <div class="col-sm-6">
          <p style={{ fontSize: "20px" }}>End Date/Time</p>
          <select
            className="form-select"
            value={endDate}
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
          >
            <option value={today}>{today1}</option>
            <option value={yesterday}>{yesterday1}</option>
            <option value={twodaysago}>{twodaysago1}</option>
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
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
      <br />
      <center>
        <table id="sumtab" class="table table-bordered table-light">
          <tbody>
            <tr>
              <th style={{ textAlign: "center", background:"#14934b", fontSize:"20px"}}> Instrument</th>
              <th style={{ textAlign: "center", background:"#14934b", fontSize:"20px"}}> Volume </th>
            </tr>
            <tr id="tabledata">
              <td style={{ textAlign: "left", paddingLeft: "15%", fontSize:"20px"}}>{"1. " + data.sym1}</td>
              <td style={{ textAlign: "center", fontSize:"20px"}}>{data.volume1}</td>
            </tr>
            <tr id="tabledata">
              <td style={{ textAlign: "left", paddingLeft: "15%", fontSize:"20px"}}>{"2. " + data.sym2}</td>
              <td style={{ textAlign: "center", fontSize:"20px"}}>{data.volume2}</td>
            </tr>
            <tr id="tabledata">
              <td style={{ textAlign: "left", paddingLeft: "15%", fontSize:"20px"}}>{"3. " + data.sym3}</td>
              <td style={{ textAlign: "center", fontSize:"20px"}}>{data.volume3}</td>
            </tr>
          </tbody>
        </table>
      </center>

      {/* <div className="card" id="sum-card">
        <div className="sum card-title">Most Traded Sym</div>
        <div class="sum-card-footer border">Instrument: {data.sym}</div>
        <div class="sum-card-footer border">
          Volume: {data.volume}
        </div>
      </div> */}
    </main>
  );
};

