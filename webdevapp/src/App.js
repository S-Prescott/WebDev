import logo from "./aq-torq.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as React from "react";

import "@progress/kendo-theme-material/dist/all.css";
import { Minmax } from "./Minmax.js";
import { ChartContainer } from "./movingaverage.js";
import { Lastvalue } from "./Pricechange.js";
import { TestChart } from "./Newchart";
import { rAvgTimeSeries } from "./getdata.service.js";
import {
  toggleMinMax,
  toggletoMT,
  toggleVolatilityG,
  toggleMovingAvgG,
  toggleCurrentPrice,
  toggleValueCache,
} from "./navigation.service";

function App() {
  // rAvgTimeSeries().then((response) => {
  //   for (let list in response) {
  //     console.log(response[list])
  //   }
  //   console.log(response);
  // });

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
          <div class="logo">
            <a
              href="https://aquaq.co.uk/"
              class="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                width="100"
                height="100"
                src="https://aquaq.co.uk/wp-content/uploads/2022/08/aquaq-logo-2022-v2.svg"
                class="custom-logo"
                alt="AquaQ"
              />
            </a>
          </div>

          <li>
            <div class="dropdown">
              <button class="dropbtn">Graph Options</button>
              <div class="dropdown-content">
                <a onClick={toggleCurrentPrice}>CurrentPrice</a>
                <a onClick={toggleVolatilityG}>Volatility</a>
                <a onClick={toggleMovingAvgG}>Moving Average</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">Side Options</button>
              <div class="dropdown-content">
                <a onClick={toggleValueCache}>Latest Changes</a>
                <a onClick={toggletoMT}>Most Traded</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">Bottom Options</button>
              <div class="dropdown-content">
                <a onClick={toggleMinMax}>Min/Max</a>
              </div>
            </div>
          </li>
        </ul>
        <div class="title">
          <h1>TorQ Dashboard</h1>
        </div>
      </nav>

      <body className="App-body">
        <div class="row">
          <div id="MovingAvgG" className="col-md-8 border">
            {/* <ChartContainer /> */}
            <TestChart />
          </div>
          <div
            id="VolatilityG"
            className="col-md-8 border"
            style={{ display: "none" }}
          >
            Volatility Graph
          </div>
          <div id="CurrentPrice" class="col-3 border">
            current price table here
          </div>
          <div id="ValueCache" class="col-3 border" style={{ display: "none" }}>
            Last Value Cache info
            <Lastvalue />
          </div>
          <div id="min/max" class="row border">
            <Minmax />
          </div>
          <div
            id="mostTradedSym"
            class="row border"
            style={{ display: "none" }}
          >
            <h1>Most Traded Sym</h1>
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </body>
    </div>
  );
}

export default App;
