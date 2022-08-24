import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PriceChange } from "./getdata.service.js";
import MyImage from './greenUp.png';
import MyImage2 from './redDown.png';
import MyImage3 from './dash.jpg';

export function arrow(x) {
  if (x > 0 ) {
    return (<td><img src={MyImage} alt="up" width="20" height="30"/> </td>); 
  } else if (x < 0) { return (<td ><img src={MyImage2} alt="down" width="20" height="30"/> </td>)
  } else { return (<td ><img src={MyImage3} alt="NaN" width="40" height="10"/> </td>)}
}

export const Lastvalue = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();


  const [data, getData] = React.useState([]);

   React.useEffect(() => {
      const interval = setInterval(() => {
        PriceChange(today).then((response) => {
          console.log(response);
          getData(response);
          });
          }, 2500);
        }, [today]);
        

  return (
    <main>
      <div>
        <center>
        <div id="pchange" className="item-container border">
          <table class="table table-bordered">
            <tbody>
                <tr>
                    <th style={{textAlign:"center"}} > Sym</th>
                    <th style={{textAlign:"center"}} > Price</th>
                    <th style={{textAlign:"center"}} > Change</th>
                    <th style={{textAlign:"center"}} > Indicator</th>
                </tr>
                {data.map((item) => (
                <tr>
                    <td style={{textAlign:"center"}}>{item.sym}</td>
                    <td style={{textAlign:"right"}} >${item.latestPrice.toFixed(2)}</td>
                    <td style={{textAlign:"right"}} >${item.Change.toFixed(2)}</td>
                    <td class="center">{arrow(item.Change.toFixed(2))}</td>

                </tr>                    
                
                ))}
            </tbody>
            </table>

        </div>
        </center>
      </div>
    </main>
  );
}
