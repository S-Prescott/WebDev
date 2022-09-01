import logo from "./aq-torq.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as React from "react";

import "@progress/kendo-theme-material/dist/all.css";
import { Minmax } from "./Minmax.js";
import { ChartContainer } from "./movingaverage.js";
import { Lastvalue } from "./Pricechange.js";
import { MovingAverage } from "./Newchart";
import { Volatility } from "./Volatility.js";
import { CurrentPriceToday } from "./CurrentPrice/CurrentPriceToday.js";
import { CurrentPriceYesterday } from "./CurrentPrice/CurrentPriceYesterday.js";
import { CurrentPriceTwoDaysAgo } from "./CurrentPrice/CurrentPriceTwoDaysAgo.js";
import { MovingAverageToday } from "./MovingAverage/MovingAverageToday.js";
import { MovingAverageYesterday } from "./MovingAverage/MovingAverageYesterday.js";
import { MovingAverageTwoDaysAgo } from "./MovingAverage/MovingAverageTwoDaysAgo.js";
import {
  toggleVolatilityGToday,
  toggleMovingAvgGToday,
  toggleMovingAvgGYesterday,
  toggleMovingAvgGTwoDaysAgo,
  toggleCurrentPriceToday,
  toggleCurrentPriceYesterday,
  toggleCurrentPriceTwoDaysAgo,
} from "./navigation.service";
import { Summary } from "./summary.js";
function App() {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const yesterday =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);
  const twoDaysAgo =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 2);
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
                width="300"
                height="80"
                src="https://aquaq.co.uk/wp-content/uploads/2022/08/aquaq-logo-2022-v2.svg"
                class="custom-logo"
                alt="AquaQ"
                left="5%"
              />
            </a>
          </div>

          <li>
            <div class="dropdown">
              <button class="dropbtn">Graph Options</button>
              {/* The onclick data of each of these need to be updated to represent the different days of data which need to be shown */}
              <div class="dropdown-content">
                <div class="dropright ">
                  <a onClick={toggleVolatilityGToday}>Volatility</a>
                  {/* <div class="dropdown-menu">
                    <h6 class="dropdown-header">Volatility Options</h6>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" onClick={toggleVolatilityG}>Today</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" onClick={toggleVolatilityG}>Yesterday</button>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" onClick={toggleVolatilityG}>Two Days Ago</button>
                  </div> */}
                </div>
                <div class="dropright dropdown-menu-right">
                  <a
                    class="dropdown-toggle"
                    id="currentpricedrop"
                    data-toggle="dropdown"
                    // onClick={toggleCurrentPriceToday}
                  >
                    Current Price
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <h6 class="dropdown-header">Select Date</h6>
                    <div class="dropdown-divider"></div>
                    <button
                      class="dropdown-item"
                      onClick={toggleCurrentPriceToday}
                    >
                      {today}
                    </button>
                    <div class="dropdown-divider"></div>
                    <button
                      class="dropdown-item"
                      onClick={toggleCurrentPriceYesterday}
                    >
                      {yesterday}
                    </button>
                    <div class="dropdown-divider"></div>
                    <button
                      class="dropdown-item"
                      onClick={toggleCurrentPriceTwoDaysAgo}
                    >
                      {twoDaysAgo}
                    </button>
                  </div>
                </div>
                <div class="dropright">
                  <a
                    class="dropdown-toggle"
                    id="currentpricedrop"
                    data-toggle="dropdown"
                    onClick={toggleMovingAvgGToday}
                  >
                    Moving Average
                  </a>
                  <div class="dropdown-menu">
                    <h6 class="dropdown-header">Moving Avg Options</h6>
                    <div class="dropdown-divider"></div>
                    <button
                      class="dropdown-item"
                      onClick={toggleMovingAvgGToday}
                    >
                      {today}
                    </button>
                    <div class="dropdown-divider"></div>
                    <button
                      class="dropdown-item"
                      onClick={toggleMovingAvgGYesterday}
                    >
                      {yesterday}
                    </button>
                    <div class="dropdown-divider"></div>
                    <button
                      class="dropdown-item"
                      onClick={toggleMovingAvgGTwoDaysAgo}
                    >
                      {twoDaysAgo}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* <li>
            <div class="dropdown">
              <button class="dropbtn">Side Options</button>
              <div class="dropdown-content">
                <a onClick={toggleValueCache}>Latest Changes</a>
                <a onClick={toggletoMT}>Most Traded</a>
              </div>
            </div>
          </li> */}
          {/* <li>
            <div class="dropdown">
              <button class="dropbtn">Bottom Options</button>
              <div class="dropdown-content">
                <a onClick={toggleMinMax}>Min/Max</a>
              </div>
            </div>
          </li> */}
        </ul>
        <div class="title">
          <h1>AquaQ TorQ Dashboard</h1>
        </div>
      </nav>

      <body className="App-body">
        <div class="container-fluid">
          <div class="row">
            <div
              id="VolatilityGToday"
              className="col-md-8 border"
              // style={{ display: "none" }}
            >
              Volatility per Instrument {today}
              {/* <Volatility /> */}
            </div>
            <div
              id="MovingAvgGToday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Moving Average per Instrument {today}
              {/* <MovingAverageToday /> */}
            </div>
            <div
              id="MovingAvgGYesterday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Moving Average per Instrument {yesterday}
              {/* <MovingAverageYesterday /> */}
            </div>
            <div
              id="MovingAvgGTwoDaysAgo"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Moving Average per Instrument {twoDaysAgo}
              {/* <MovingAverageTwoDaysAgo /> */}
            </div>
            <div
              id="CurrentPriceToday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Current Price per Instrument {today}
              {/* <CurrentPriceToday /> */}
            </div>
            <div
              id="CurrentPriceYesterday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Current Price per Instrument {yesterday}
              {/* <CurrentPriceYesterday /> */}
            </div>
            <div
              id="CurrentPriceTwoDaysAgo"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Current Price per Instrument {twoDaysAgo}
              {/* <CurrentPriceTwoDaysAgo /> */}
            </div>
            <div id="ValueCache" class="col-4 border">
              Current Price Fluxtuation per Instrument
              <Lastvalue />
            </div>
          </div>
          <div class="row" style={{ marginTop: "20px" }}>
            <div class="col-md-8 border" id="min-max">
              Minimum and Maximum Price per Instrument
              {/* <Minmax /> */}
            </div>
        
        <div id="mostTradedSym" class="col-4 border" style={{ display: "block" }}>

          Highest Traded Instrument
          <Summary />
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
        </div>

      </body>
      <footer></footer>
    </div>
  );
}

export default App;
