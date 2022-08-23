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
import {
  toggleMinMax,
  toggletoMT,
  toggleVolatilityG,
  toggleMovingAvgG,
  toggleCurrentPrice,
  toggleValueCache,
} from "./navigation.service";

function App() {
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
        
          <div id="MovingAvgG" className="col-md-8 border" style={{position:"absolute", width:"60%", left:"2%"}}>
            {/* <ChartContainer /> */}
            <MovingAverage />
          </div>
          <div
            id="VolatilityG"
            className="col-md-8 border"
            style={{ display: "none" }}
          >
            Volatility Graph
            <Volatility />
          </div>
          <div className="high">
            Most Traded Instrument 
          </div>
          <div id="ValueCache" class="col-3 border" style={{backgroundColor: "#14934b", position:"absolute", top:"15%", right:"2%", width:"500px", height:"750px"}}>
            Last Value Cache info
            <Lastvalue />
          </div>
          <div id="min-max">
            <Minmax />
          </div>
          <div
            id="mostTradedSym"
            class="row border"
            style={{ display: "none" }}
          >
            <h1>Most Traded Sym</h1>
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
      <footer></footer>
    </div>
  );
}

export default App;
