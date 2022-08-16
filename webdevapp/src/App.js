import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getdata,getminmaxdata,hightrade,rAvgTimeSeries } from './getdata.service.js';
// import { ApexChart } from './movingaverage.js';


function App() {
  const [data, getData] = React.useState([])
  React.useEffect(() => {
    getminmaxdata(value)
    .then((response) => {
      console.log(response);
      getData(response);
    })
  }, [])
  var day = new Date();
  const today = day.getFullYear()+'.'+(day.getMonth()+1)+'.'+day.getDate();
  const yesterday = day.getFullYear()+'.'+(day.getMonth()+1)+'.'+(day.getDate()-1);
  const twodaysago = day.getFullYear()+'.'+(day.getMonth()+1)+'.'+(day.getDate()-2);

  const [value, setValue] = React.useState(today);

  const handleChange = (event) => {
    setValue(event.target.value);
    getminmaxdata(value)
    .then((response) => {
      console.log(response);
      getData(response);
    })
  };
  console.log(value);

  rAvgTimeSeries()
  .then((response) => {
    console.log(response);
  })
  // ApexChart()
  //getdata();
  //hightrade();
  // rAvgTimeSeries();
  return (
    <div className="App">
      <header className="App-header">
      <h1>SlaQers</h1>
      </header>
      <body className="App-body">
      <div class="row container text-center">
      <div class="col-md-2">
      <ul class="nav flex-column">
          <li class="nav-item">Moving Average Graph</li>
          <li>Volotility Graph</li>
          <li>Current Price</li>
          <li>Cast U-cosle Table</li>
          <li>Min/Max</li>
          <li>Summary Volume(high)</li>
      </ul>
      </div>
      <div class="col">
        <select class="form-select" value={value} onChange={handleChange}>
          <option value={today}>{today}</option>
          <option value={yesterday}>{yesterday}</option>
          <option value={twodaysago}>{twodaysago}</option>
        </select>
        <tbody class="table table-bordered">
          <tr>
            <th>Sym</th>
              <th>Max Price</th>
              <th>Min Price</th>
          </tr>
          {data.map((item, i) => (
          <tr key={i}>
            <td>{item.sym}</td>
            <td>${item.Max}</td>
            <td>${item.Min}</td>
          </tr>
          ))}
        </tbody>
        </div>
        </div>
      </body>
    </div>
  );
}

export default App;
