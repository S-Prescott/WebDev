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

// const series = [1,2,3,4,5];
const categories = [1,2,3,4,5,6,7,8,9];
export class ChartContainer extends React.Component {
  state ={
    style:"smooth",
  };
  render() {
    return (
      <div>
        <Chart>
          <ChartTitle text="Moving Average"/>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem title={{ text:"Time",}}categories={categories} />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem type="donut" data={[1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200,1,1040,194,121,140,181,200]}/>
          </ChartSeries>
        </Chart>
      </div>
    );
  }
}
