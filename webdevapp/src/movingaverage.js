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
  ChartTooltip,
  ChartSeriesItemTooltip,
} from "@progress/kendo-react-charts";
import "hammerjs";
import { rAvgTimeSeries } from "./getdata.service.js";

// const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const ChartContainer = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    rAvgTimeSeries(today).then((response) => {
      console.log(response);
      getData(response.y.y);
    });
  }, []);

  const [categories, getCategories] = React.useState([]);
  React.useEffect(() => {
    rAvgTimeSeries(today).then((response) => {
      var arr = [];
      for (let i in response.x) {
        var hours = Math.floor(response.x[i].i / 60);
        // var mins = Math.floor(response.x[i].i-(hours*60))
        arr.push(hours + ":00");
      }
      console.log(arr);
      getCategories(arr);
    });
  }, []);

  const defaultTooltipRender = ({ point }) => `$${point.value.toFixed(2)}`;

  return (
    <div>
      <Chart>
        <ChartTooltip render={defaultTooltipRender} />
        <ChartLegend />
        <ChartTitle text="Moving Average" />
        <ChartValueAxis>
          <ChartValueAxisItem
            title={{
              text: "Price",
            }}
            labels={{
              format: "c0",
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
          <ChartSeriesItem
            name="APPL"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[0]}
          />
          <ChartSeriesItem
            name="AIG"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[1]}
          />
          <ChartSeriesItem
            name="AMD"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[2]}
          />
          <ChartSeriesItem
            name="DELL"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[3]}
          />
          <ChartSeriesItem
            name="DOW"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[4]}
          />
          <ChartSeriesItem
            name="GOOG"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[5]}
          />
          <ChartSeriesItem
            name="HPQ"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[6]}
          />
          <ChartSeriesItem
            name="IBM"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[7]}
          />
          <ChartSeriesItem
            name="INTC"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[8]}
          />
          <ChartSeriesItem
            name="MSFT"
            type="line"
            markers={{
              visible: false,
            }}
            data={data[9]}
          />
        </ChartSeries>
      </Chart>
    </div>
  );
};
