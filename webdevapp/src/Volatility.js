import * as React from "react";
import Chart from "react-apexcharts";
import { volatility } from "./getdata.service.js";

export const Volatility = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const [data, getData] = React.useState([]);

  React.useEffect(() => {
    volatility(today).then((response) => {
      console.log(response);
      getData(response.y.y);
    });
  }, [today]);

  const [categories, getCategories] = React.useState([]);
  React.useEffect(() => {
    volatility(today).then((response) => {
      let arr = [];
      for (let i in response.x) {
        let hours = Math.floor(response.x[i].i / 60);
        let mins = Math.floor(response.x[i].i - hours * 60);
        if (mins === 0) {
          mins = "00";
        }
        arr.push(hours + ":" + mins);
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
      id: "volatility",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ['#e6194B', '#f58231', '#ffe119', '#bfef45', '#3cb44b', '#42d4f4', '#4363d8', '#911eb4', '#f032e6', '#000000'],
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
        text: "",
      },
    },
    yaxis: {
      title: {
        text: "",
      },
      labels: {
        formatter: function (val) {
          return val.toFixed(2);
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
      id: "volatilityBrush",
      height: 130,
      type: "area",
      brush: {
        target: "volatility",
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
    colors: ['#e6194B', '#f58231', '#ffe119', '#bfef45', '#3cb44b', '#42d4f4', '#4363d8', '#911eb4', '#f032e6', '#000000'],
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
        height="360px"
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
