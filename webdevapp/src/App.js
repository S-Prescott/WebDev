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
import PageNotFound from './404-page.js'
import Home from './MainPage.js'
import { Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  
  return (
    <div className="App" >

    
    <BrowserRouter>
      <Routes>
        <Route path="/WebDev" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
  
}
    

export default App;
