import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { getdata,getminmaxdata,hightrade } from './getdata.service.js';

function App() {
  const [data, getData] = React.useState([])
  React.useEffect(() => {
    getminmaxdata(value)
    .then((response) => {
      console.log(response);
      getData(response);
  })
  }, [])
  const [value, setValue] = React.useState('2022.08.15');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  //getdata();
  //hightrade();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WebDevApp</h1>
        <select className="form-select" value={value} onChange={handleChange}>
          <option value='2022.08.15'>Today</option>
          <option value='2022.08.14'>Yesterday</option>
          <option value='2022.08.13'>Two Days Ago</option>
        </select>
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
