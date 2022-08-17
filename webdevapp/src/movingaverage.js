import * as React from "react";
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";
import { rAvgTimeSeries } from "./getdata.service.js";

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const ChartContainer = () => {
  const [data, getData] = React.useState([]);

  console.log(rAvgTimeSeries());
  React.useEffect(() => {
    rAvgTimeSeries().then((response) => {
      console.log(response);
      getData(response);
    });
  }, []);
  return (
    <div>
      <Chart>
        <ChartTitle text="Moving Average" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            title={{ text: "Time" }}
            categories={categories}
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="line" data={data} />
        </ChartSeries>
      </Chart>
    </div>
  );
};
