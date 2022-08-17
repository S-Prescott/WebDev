import * as React from "react";
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartLegend,
} from "@progress/kendo-react-charts";
import "hammerjs";
import { rAvgTimeSeries } from "./getdata.service.js";

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const syms = ["APPL", "AIG", "AMD", "DELL", "DOW", "GOOG", "HPQ", "IBM", "INTC", "MSFT"]
export const ChartContainer = () => {
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    rAvgTimeSeries().then((response) => {
      console.log(response);
      getData(response);
    });
  }, []);
  return (
    <div>
      <Chart>
        <ChartLegend />
        <ChartTitle text="Moving Average" />
        <ChartValueAxis>
          <ChartValueAxisItem
            title={{
              text: "Price",
            }}
          />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            title={{ text: "Time" }}
            categories={categories}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          {data.map((series) => (
            <ChartSeriesItem
              name={series.sym}
              type="line"
              markers={{
                visible: false,
              }}
              data={series.average}
            />
          ))}
        </ChartSeries>
      </Chart>
    </div>
  );
};
