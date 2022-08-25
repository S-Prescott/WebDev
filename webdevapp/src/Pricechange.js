import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PriceChange } from "./getdata.service.js";
import MyImage from "./greenUp.png";
import MyImage2 from "./redDown.png";
import MyImage3 from "./dash.jpg";

export function arrow(x) {
  if (x > 0) {
    return (
      <td>
        <img src={MyImage} alt="up" width="20" height="30" />{" "}
      </td>
    );
  } else if (x < 0) {
    return (
      <td>
        <img src={MyImage2} alt="down" width="20" height="30" />{" "}
      </td>
    );
  } else {
    return (
      <td>
        <img src={MyImage3} alt="NaN" width="40" height="10" />{" "}
      </td>
    );
  }
}

export const Lastvalue = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();

  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      PriceChange(today).then((response) => {
        console.log(response);
        getData(response);
      });
    }, 2500);
  }, [today]);

  return (
    <center>
      <table class="table table-bordered table-dark">
        <tbody>
          <tr>
            <th style={{ textAlign: "center" }}> Sym</th>
            <th style={{ textAlign: "center" }}> Price</th>
            <th style={{ textAlign: "center" }}> Change</th>
            <th style={{ textAlign: "center" }}> Indicator</th>
          </tr>
          {data.map((item) => (
            <tr id="tabledata">
              <td style={{ textAlign: "center" }}>{item.sym}</td>
              <td style={{ textAlign: "right" }}>
                ${item.latestPrice.toFixed(2)}
              </td>
              <td style={{ textAlign: "right" }}>${item.Change.toFixed(2)}</td>
              <center>
                <td class="center">{arrow(item.Change.toFixed(2))}</td>
              </center>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};
