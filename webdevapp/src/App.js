import logo from "./aq-torq.png";
import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Minmax } from "./Minmax.js";
import { ChartContainer } from "./movingaverage.js";
import { Lastvalue } from "./Pricechange.js";
import { rAvgTimeSeries } from "./getdata.service.js";
import { toggleMinMax, 
  toggletoMT, 
  toggleVolatilityG, 
  toggleMovingAvgG, 
  toggleCurrentPrice, 
  toggleValueCache } from "./navigation.service";

function App() {
  // rAvgTimeSeries().then((response) => {
  //   for (let list in response) {
  //     console.log(response[list])
  //   }
  //   console.log(response);
  // });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Torq Dashboard</h1>
      </header>
      <body className="App-body">
        <div class="row" style={{}}>
          <div class="col position-static border">
            <nav class="navbar navbar-light bg-alert">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <button class="btn nav-link active" onClick={toggleMovingAvgG}>
                    Moving Average Graph
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn nav-link" onClick={toggleVolatilityG}>Volatility Graph</button>
                </li>
                <li class="nav-item">
                  <button class="btn nav-link active" onClick={toggleCurrentPrice}>Current Price</button>
                </li>
                <li class="nav-item">
                  <button class="btn nav-link" onClick={toggleValueCache}>Last Value Table</button>
                </li>
                <li class="nav-item">
                  <button class="btn nav-link active"onClick={toggleMinMax}>Min/Max Price</button>
                </li>
                <li class="nav-item">
                  <a class="btn nav-link"onClick={toggletoMT}>Most Traded Sym</a>
                </li>
              </ul>
            </nav>
          </div>

          <div id="MovingAvgG" className="col-md-8 border">
            <ChartContainer />
          </div>
          <div id="VolatilityG"className="col-md-8 border" style={{ display: "none" }}>
            Volatility Graph
          </div>
          <div id="CurrentPrice" class="col-3 border">current price table here</div>
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
      </body>
    </div>
  );
}

export default App;
