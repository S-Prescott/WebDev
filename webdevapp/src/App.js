import logo from "./aq-torq.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from 'react';
import "@progress/kendo-theme-material/dist/all.css";
import { Minmax } from "./Minmax.js";
import { Lastvalue } from "./Pricechange.js";
import { Volatility } from "./Volatility.js";
import { CurrentPriceToday } from "./CurrentPrice/CurrentPriceToday.js";
import { CurrentPriceYesterday } from "./CurrentPrice/CurrentPriceYesterday.js";
import { CurrentPriceTwoDaysAgo } from "./CurrentPrice/CurrentPriceTwoDaysAgo.js";
import { MovingAverageToday } from "./MovingAverage/MovingAverageToday.js";
import { MovingAverageYesterday } from "./MovingAverage/MovingAverageYesterday.js";
import { MovingAverageTwoDaysAgo } from "./MovingAverage/MovingAverageTwoDaysAgo.js";
import Moment from 'moment';
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
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { dateTimeNow} from './lastupdate.js'
function App() {
  let day = new Date();
  const today =
    Moment().format("Do MMM YYYY")
  const yesterday =
    Moment().subtract(1,'day').format("Do MMM YYYY")
  const twoDaysAgo =
    Moment().subtract(2, 'day').format("Do MMM YYYY")
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
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
              <button class="dropbtn dropdown-toggle">Graph Options 
              <span class="caret"></span>
              </button>
              {/* The onclick data of each of these need to be updated to represent the different days of data which need to be shown */}
              <div class="dropdown-content">
                <div class="dropright ">
                  <a onClick={toggleVolatilityGToday}>Instrument Volatility</a>
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
                    Instrument Price
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
                    Running Average Price
                  </a>
                  <div class="dropdown-menu">
                    <h6 class="dropdown-header">Select Date</h6>
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
          <h1>ATLANTIC MARKETS</h1>
        </div>
      </nav>

      <body className="App-body">
        <div class="container-fluid">
          <div class="row">
            <div
              id="VolatilityGToday"
              className="col-md-8 border" style={{height:"600px"}}
              // style={{ display: "none" }}
            >
              Instrument Volatility
              <button 
                class="volatilityb"
                onMouseEnter={() => setIsShown3(true)}
                onMouseLeave={() => setIsShown3(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown3 && (
                <div class="overlay">
                  <div class="volatilitybutton">
                    <center><u>Instrument Volatility</u></center>
                    Graph showing the volatility of each instrument over a given time period.
                    <br/>
                    - Use the drop-down selectors to specify a date/time range
                    <br/>
                    - Instruments can be toggled using the interactive legend  
                  </div>
                </div>
              )}
              <Volatility />
            </div>
            <div
              id="MovingAvgGToday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Running Average Price: {today}
              <button 
                class="runningb"
                onMouseEnter={() => setIsShown4(true)}
                onMouseLeave={() => setIsShown4(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown4 && (
                <div class="overlay">
                  <div class="runningbutton">
                    <center><u>Running Average Price</u></center>
                    Graph displaying the running average price of each instrument over a given day.
                    <br/>
                    - Use the slider beneath the graph to select a time range
                    <br/>
                    - Instruments can be toggled using the interactive legend
                  </div>
                </div>
              )}
              <MovingAverageToday />
            </div>
            <div
              id="MovingAvgGYesterday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Running Average Price: {yesterday}
              <button 
                class="runningb"
                onMouseEnter={() => setIsShown4(true)}
                onMouseLeave={() => setIsShown4(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown4 && (
                <div class="overlay">
                  <div class="runningbutton">
                    <center><u>Running Average Price</u></center>
                    Graph displaying the running average price of each instrument over a given day.
                    <br/>
                    - Use the slider beneath the graph to select a time range
                    <br/>
                    - Instruments can be toggled using the interactive legend 
                  </div>
                </div>
              )}
              <MovingAverageYesterday />
            </div>
            <div
              id="MovingAvgGTwoDaysAgo"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Running Average Price: {twoDaysAgo}
              <button 
                class="runningb"
                onMouseEnter={() => setIsShown4(true)}
                onMouseLeave={() => setIsShown4(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown4 && (
                <div class="overlay">
                  <div class="runningbutton">
                    <center><u>Running Average Price</u></center>  
                    Graph displaying the running average price of each instrument over a given day.
                    <br/>
                    - Use the slider beneath the graph to select a time range
                    <br/>
                    - Instruments can be toggled using the interactive legend
                  </div>
                </div>
              )}
              <MovingAverageTwoDaysAgo />
            </div>
            <div
              id="CurrentPriceToday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Price of Instrument: {today}
              <button 
                class="currentb"
                onMouseEnter={() => setIsShown5(true)}
                onMouseLeave={() => setIsShown5(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown5 && (
                <div class="overlay">
                  <div class="currentbutton">
                    <center><u>Instrument Price</u></center>
                    Graph displaying the price of each instrument over a given day.
                    <br/>
                    - Use the slider beneath the graph to select a time range
                    <br/>
                    - Instruments can be toggled using the interactive legend 
                  </div>
                </div>
              )}
              <CurrentPriceToday />
            </div>
            <div
              id="CurrentPriceYesterday"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Price of Instrument: {yesterday}
              <button 
                class="currentb"
                onMouseEnter={() => setIsShown5(true)}
                onMouseLeave={() => setIsShown5(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown5 && (
                <div class="overlay">
                  <div class="currentbutton">
                    <center><u>Instrument Price</u></center>
                    Graph displaying the price of each instrument over a given day.
                    <br/>
                    - Use the slider beneath the graph to select a time range
                    <br/>
                    - Instruments can be toggled using the interactive legend
                  </div>
                </div>
              )}
              <CurrentPriceYesterday />
            </div>
            <div
              id="CurrentPriceTwoDaysAgo"
              className="col-md-8 border"
              style={{ display: "none" }}
            >
              Price of Instrument: {twoDaysAgo}
              <button 
                class="currentb"
                onMouseEnter={() => setIsShown5(true)}
                onMouseLeave={() => setIsShown5(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown5 && (
                <div class="overlay">
                  <div class="currentbutton">
                    <center><u>Instrument Price</u></center>
                    Graph displaying the price of each instrument over a given day.
                    <br/>
                    - Use the slider beneath the graph to select a time range
                    <br/>
                    - Instruments can be toggled using the interactive legend 
                  </div>
                </div>
              )}
              <CurrentPriceTwoDaysAgo />
            </div>
            <div id="ValueCache" class="col-4">
              Latest Price Movement
              <button 
                class="cacheb"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown && (
                <div class="overlay">
                  <div class="cachebutton">
                    <center><u>Latest Price Movement</u></center>
                    Dynamic table showing latest price, change in price, and a visual indicator showing direction of price movement for each instrument.
                    <br/>
                    - Change in price calculated between last 2 executed trades
                    <br/>
                    - Table updates every 2 seconds
                  </div>
                </div>
              )}
              <Lastvalue />
            </div>
          </div>
          <div class="row" style={{ marginTop: "0px" }}>
            <div class="col-md-8" id="min-max">
              Price Range By Date
              <button 
                class="minmaxb"
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown1 && (
                <div class="overlay">
                  <div class="minmaxbutton">
                    <center><u>Price Range By Date</u></center>
                    Summary boxes displaying the price range of each insrument for a given day in the last 3 days.
                    <br/>
                    - Boxes update every 20 seconds  
                  </div>
                </div>
              )}
              <Minmax />
            </div>
        
        <div id="mostTradedSym" class="col-4" style={{ display: "block" }}>

          Highest Traded Instruments
          <button 
                class="highb"
                onMouseEnter={() => setIsShown2(true)}
                onMouseLeave={() => setIsShown2(false)}>
                <AiOutlineInfoCircle />
              </button>
              {isShown2 && (
                <div class="overlay">
                  <div class="highbutton">
                    <center><u>Highest Traded Instruments</u></center>
                    Table listing the top 3 most traded Instruments over a given date/time range.  
                    <br/>
                    - Use the drop-down selectors to specify a date/time range 
                  </div>
                </div>
              )}
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
      <footer class="fixedfoot">
        <div class="row" style={{height:"15px"}}></div>
        <div class="row">
          <div class="col"><h6 id="serverConnection" style={{textAlign:"left", marginLeft:"2.5rem", color:"white"}}>server connection: checking</h6></div>
          <div class="col"><h6 style={{textAlign:"right", marginRight:"2.5rem", color:"white"}}>All Times in UTC</h6></div>
        </div>
        <div class="row" style={{height:"15px"}}></div>
      </footer>
      <footer>
        <h4>Placeholder</h4>
      </footer>
    </div>
   
  );
  
}

export default App;
