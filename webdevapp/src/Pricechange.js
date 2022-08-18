import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PriceChange } from "./getdata.service.js";
import MyImage from './greenUp.png';
import MyImage2 from './redDown.png';

export function arrow(x) {
  if (x > 0 ) {
    return (<td><img src={MyImage} alt="up" /> </td>); 
  } else { return (<td><img src={MyImage2} alt="down" /> </td>)}}

export const Lastvalue = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();


  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    PriceChange(today).then((response) => {
      console.log(response);
      getData(response);
    });
  }, [today]);

  return (
    <main>
      <button
      />
      <div>
        
        <div className="item-container border">
          
            <tbody>
                <tr>
                    <th>Sym</th>
                    <th>Latest Price</th>
                    <th>Price Change</th>
                    <th>Arrow Display</th>
                </tr>
                {data.map((item) => (
                <tr>
                    <td>{item.sym}</td>
                    <td>$ {item.latestPrice.toFixed(2)}</td>
                    <td>$ {item.Change.toFixed(2)}</td>
                    {arrow(item.Change.toFixed(2))}

                </tr>                    
                
                ))}
            </tbody>

        </div>
      </div>
    </main>
  );
};
