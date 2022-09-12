import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PriceChange } from "./getdata.service.js";
import { BsArrowUp } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs'
import { BsDash } from 'react-icons/bs'
import { dateTimeNow } from "./lastupdate";

export function arrow(x) {
  if (x > 0) {
    return (
      <td>
        <BsArrowUp fill='#1DFF00' size='25px' />
      </td>
    );
  } else if (x < 0) {
    return (
      <td>
        <BsArrowDown fill='#FF0004' size='25px'/>
      </td>
    );
  } else {
    return (
      <td>
        <BsDash fill='#00B2FF' size='25px' />
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
    PriceChange(today).then((response) => {
      console.log(response);
      getData(response);
    });
  }, [today])

  React.useEffect(() => {
    const interval = setInterval(() => {
      PriceChange(today).then((response) => {
        // console.log(response);
        getData(response);
        dateTimeNow();

      });
    }, 4000);
  }, [today]);

  return (
    <center>
      <table class="table table-bordered table-light" >
        <tbody id="lastvaluetable">
          <tr>
            <th style={{ textAlign: "center",background:"#14934b" }}> Instrument</th>
            <th style={{ textAlign: "center",background:"#14934b" }}> Price ($)</th>
            <th style={{ textAlign: "center",background:"#14934b" }}> Change ($)</th>
            <th style={{ textAlign: "center",background:"#14934b" }}> </th>
          </tr>
          {data.map((item) => (
            <tr id="tabledata">
              <td style={{ textAlign: "center" }}>{item.sym}</td>
              <td style={{ textAlign: "right" }}>
                {item.latestPrice.toFixed(2).toLocaleString(navigator.language, {minimumFractionDigits: 0})}
              </td>
              <td style={{ textAlign: "right" }}>{item.Change.toFixed(2).toLocaleString(navigator.language, {minimumFractionDigits: 0})}</td>
              <center>
                <td class="center">{arrow(item.Change.toFixed(2).toLocaleString(navigator.language, {minimumFractionDigits: 0}))}</td>
              </center>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};
