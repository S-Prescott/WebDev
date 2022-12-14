import * as React from "react";
import Chart from "react-apexcharts";
import { rAvgTimeSeries } from "./getdata.service.js";

export const MovingAverage = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    rAvgTimeSeries(today).then((response) => {
      console.log(response);
      getData(response.y.y);
    });
  }, [today]);

  const [categories, getCategories] = React.useState([]);
  React.useEffect(() => {
    rAvgTimeSeries(today).then((response) => {
      let arr = [];
      for (let i in response.x) {
        let hours = Math.floor(response.x[i].i / 60);
        arr.push(hours + ":00");
      }
      console.log(arr);
      getCategories(arr);
    });
  }, [today]);

  const Series = [
    {
      name: "APPL",
      data: data[0],
    },
    {
      name: "AIG",
      data: data[1],
    },
    {
      name: "AMD",
      data: data[2],
    },
    {
      name: "DELL",
      data: data[3],
    },
    {
      name: "DOW",
      data: data[4],
    },
    {
      name: "GOOG",
      data: data[5],
    },
    {
      name: "HPQ",
      data: data[6],
    },
    {
      name: "IBM",
      data: data[7],
    },
    {
      name: "INTC",
      data: data[8],
    },
    {
      name: "MSFT",
      data: data[9],
    },
  ];
  const Options = {
    chart: {
      id: "chart",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ['#E60101', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#2E9300', '#00DA26', '#54007A', '#EE1E63', '#FF2800'],
    stroke: {
      width: 3,
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "category",
      categories: categories,
      title: {
        text: "Time",
      },
    },
    yaxis: {
      title: {
        text: "Price",
      },
      labels: {
        formatter: function (val) {
          return "$" + val.toFixed(2);
        },
      },
    },
    legend: {
      position: "right",
    },
    tooltip: {
      shared: false,
    },
  };
  const subOptions = {
    chart: {
      id: "chart1",
      height: 120,
      type: "area",
      brush: {
        target: "chart",
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: categories[0],
          max: categories[1],
        },
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: categories,
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        show: false,
      },
    },
  };
  return (
    <div>
      <Chart
        type="line"
        series={Series}
        options={Options}
        width="100%"
        height="120%"
      />
      <Chart
        type="area"
        series={Series}
        options={subOptions}
        width="100%"
        height="30%"
      />
    </div>
  );
};
