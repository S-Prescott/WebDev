import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PriceChange } from "./getdata.service.js";

export const Lastvalue = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();

  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    PriceChange("2022.08.17").then((response) => {
      console.log(response);
      getData(response);
    });
  }, []);

  return (
    <main>
      <button
      />
      <div>
        
        <div className="item-container border">
          
            <tbody>
                <tr>
                    <th>Sym</th>
                    <th>Price</th>
                    <th>Arrow</th>
                </tr>
                {data.map((item) => (
                <tr>
                    <td>{item.sym}</td>
                    <td>{item.latestPrice.toFixed(2)}</td>
                    <td>{item.Change.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>

        </div>
      </div>
    </main>
  );
};
