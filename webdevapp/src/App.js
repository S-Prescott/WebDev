import logo from './aq-torq.png'
import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getminmaxdata,rAvgTimeSeries } from './getdata.service.js';

function App() {
  let day = new Date();
  const today = day.getFullYear()+'.'+(day.getMonth()+1)+'.'+day.getDate();
  const yesterday = day.getFullYear()+'.'+(day.getMonth()+1)+'.'+(day.getDate()-1);
  const twodaysago = day.getFullYear()+'.'+(day.getMonth()+1)+'.'+(day.getDate()-2);
  
  const [date, setdate] = React.useState(today);
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    getminmaxdata(date)
    .then((response) => {
      console.log(response);
      getData(response);
    })
  }, [date])

  console.log(date);
  console.log(logo);

  rAvgTimeSeries()
  .then((response) => {
    console.log(response);
  })

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
        <select className="form-select" value={date} onChange={(event) => {setdate(event.target.value)}}>
          <option value={today}>{today}</option>
          <option value={yesterday}>{yesterday}</option>
          <option value={twodaysago}>{twodaysago}</option>
        </select>
        <tbody className="table table-bordered">
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
