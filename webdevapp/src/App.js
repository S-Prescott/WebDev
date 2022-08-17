import logo from "./aq-torq.png";
import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Minmax } from "./Minmax.js";
import { rAvgTimeSeries } from "./getdata.service.js";

function App() {
  rAvgTimeSeries().then((response) => {
    console.log(response);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>SlaQers</h1>
      </header>
      <body className="App-body">
        <div className="row container text-center">
          <div className="col-md-2">
            <ul className="nav flex-column">
              {/* <li>
              <image src={logo} className="App-logo" alt="logo" />
            </li> */}
              <li>Moving Average Graph</li>
              <li>Volotility Graph</li>
              <li>Current Price</li>
              <li>Cast U-cosle Table</li>
              <li>Min/Max</li>
              <li>Summary Volume(high)</li>
            </ul>
          </div>
          <div className="col">
            <Minmax />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
