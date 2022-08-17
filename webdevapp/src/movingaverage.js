import * as React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import { rAvgTimeSeries } from "./getdata.service.js";

const series = [29, 5, 15];

export class ChartContainer extends React.Component {
  render() {
    return (
      <div>
        <Chart>
          <ChartSeries>
            <ChartSeriesItem type="line" data={series} />
          </ChartSeries>
        </Chart>
      </div>
    );
  }
}
