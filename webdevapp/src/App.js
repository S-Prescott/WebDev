import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getdata,getminmaxdata,hightrade } from './getdata.service.js';

function App() {
  const [data, getData] = useState([])
  useEffect(() => {
    getminmaxdata()
    .then((response) => {
      getData(response);
  })
  }, [])
  //getdata();
  //hightrade();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WebDevApp</h1>
        <tbody>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://reactlibraries.com/library/7a5ab17e-94d3-4721-8d0e-a35104b388db"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grommet
        </a>
      </header>
    </div>
  );
}

export default App;
