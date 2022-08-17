import logo from "./aq-torq.png";
import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Minmax } from "./Minmax.js";
import { ChartContainer } from "./movingaverage.js";
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
        <div class="row" style={{}}>
          <div class="col-sm-1 position-static border">
            <nav class="navbar navbar-light bg-alert">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    Moving Average Graph
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Volatility Graph
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    Current Price
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Last Value Table
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">
                    Min/Max Price
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Most Traded Sym
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-7 border">
          <ChartContainer />
          </div>
          <div class="col-md-4 border">
          <Minmax />
          </div>
          <div class="row border">
            <h1>Bottom Row</h1>
          </div>
        </div>
      </body>
    </div>
    
  );
}

export default App;
