import * as React from "react";
import '@progress/kendo-theme-material/dist/all.css';
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
// import { Slider, SliderLabel } from "@progress/kendo-react-inputs";
// import ReactApexChart from 'apexcharts'
import {
  LineChart,
  Bar,
  Tooltip,
  Legend,
  ComposedChart,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";
import "hammerjs";
import { rAvgTimeSeries } from "./getdata.service.js";


const categories = [
  "APPL",
  "AIG",
  "AMD",
  "DELL",
  "DOW",
  "GOOG",
  "HPQ",
  "IBM",
  "INTC",
  "MSFT",
];
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


  var arr = [];
  var i = 0;
  for (var time in categories) {
    arr.push({
      time: categories[time],
      APPL: data[0][i],
      AIG: data[1][i],
      AMD: data[2][i],
      DELL: data[3][i],
      DOW: data[4][i],
      GOOG: data[5][i],
      HPQ: data[6][i],
      IBM: data[7][i],
      INTC: data[8][i],
      MSFT: data[9][i],
    });
    i++
    console.log(arr)
  }


  return (
    <div class='moving'>
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
      <ComposedChart width={800} height={700} data={arr}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line dataKey="APPL" />
        <Line dataKey="AIG" stroke="#8884d8"/>
        <Line dataKey="AMD" stroke="#8884d8"/>
        <Line dataKey="DELL" stroke="#8884d8"/>
        <Line dataKey="DOW" stroke="#8884d8"/>
        <Line dataKey="GOOG" stroke="#8884d8"/>
        <Line dataKey="HPQ" stroke="#8884d8"/>
        <Line dataKey="IBM" stroke="#8884d8"/>
        <Line dataKey="INTC" stroke="#8884d8"/>
        <Line dataKey="MSFT" stroke="#8884d8"/>
        <Brush dataKey="time" startIndex={0} endIndex={1} />
      </ComposedChart>
      <div id="chartdiv"></div>
    </div>
  );
};
