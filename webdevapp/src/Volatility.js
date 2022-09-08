import * as React from "react";
import Chart from "react-apexcharts";
import { volatilityrdb, volatilityhdb } from "./getdata.service.js";
import Moment from "moment";

export const Volatility = () => {
  let day = new Date();
  const today =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
  const yesterday =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);
  const twodaysago =
    day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 2);
  const today1 = Moment().format("Do MMM YYYY");
  const yesterday1 = Moment().subtract(1, "day").format("Do MMM YYYY");
  const twodaysago1 = Moment().subtract(2, "day").format("Do MMM YYYY");
  const [data, getData] = React.useState([]);

  const [startDate, setStartDate] = React.useState(today);
  const [endDate, setEndDate] = React.useState(today);
  const [startTime, setStartTime] = React.useState("00:00");
  const [endTime, setEndTime] = React.useState("23:59");

  React.useEffect(() => {
    if (startDate === endDate) {
      if (startTime >= endTime) {
        console.log("error");
      } else {
        if (startDate === today) {
          volatilityrdb(startTime, endTime).then((response) => {
            console.log(response);
            getData(response.y.y);
          });
        }
        if (startDate === yesterday) {
          volatilityhdb(yesterday, startTime, endTime).then((response) => {
            console.log(response);
            getData(response.y.y);
          });
        }
        if (startDate === twodaysago) {
          volatilityhdb(twodaysago, startTime, endTime).then((response) => {
            console.log(response);
            getData(response.y.y);
          });
        }
      }
    } else {
      if (startDate > endDate) {
        console.log("error");
      } else {
        if (startDate === yesterday && endDate === today) {
          let arr1 = [];
          let arr2 = [];
          volatilityhdb(yesterday, startTime, "23:59:59").then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr1.push(response.y.y[i]);
            }
          });
          volatilityrdb("00:00:00", endTime).then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr2.push(response.y.y[i]);
            }
          });
          let comb = [];
          setTimeout(() => {
            for (let i in arr1) {
              comb.push(arr1[i].concat(arr2[i]));
            }
            getData(comb);
          }, 1000);
        }
        if (startDate === twodaysago && endDate === yesterday) {
          let arr1 = [];
          let arr2 = [];
          volatilityhdb(twodaysago, startTime, "23:59:59").then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr1.push(response.y.y[i]);
            }
          });
          volatilityhdb(yesterday, "00:00:00", endTime).then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr2.push(response.y.y[i]);
            }
          });
          let comb = [];
          setTimeout(() => {
            for (let i in arr1) {
              comb.push(arr1[i].concat(arr2[i]));
            }
            getData(comb);
          }, 1000);
        }
        if (startDate === twodaysago && endDate === today) {
          let arr1 = [];
          let arr2 = [];
          let arr3 = [];
          volatilityhdb(twodaysago, startTime, "23:59:59").then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr1.push(response.y.y[i]);
            }
          });
          volatilityhdb(yesterday, "00:00:00", "23:59:59").then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr2.push(response.y.y[i]);
            }
          });
          volatilityrdb("00:00:00", endTime).then((response) => {
            console.log(response);
            for (let i in response.y.y) {
              arr3.push(response.y.y[i]);
            }
          });
          let comb = [];
          setTimeout(() => {
            for (let i in arr1) {
              comb.push(arr1[i].concat(arr2[i],arr3[i]));
            }
            getData(comb);
          }, 1000);
        }
      }
    }
  }, [endDate, endTime, startDate, startTime, today, twodaysago, yesterday]);

  const [categories, getCategories] = React.useState([]);
  React.useEffect(() => {
    let arr = [];
    if (startDate === endDate) {
      if (startTime >= endTime) {
        console.log("error");
      } else {
        if (startDate === today) {
          volatilityrdb(startTime, endTime).then((response) => {
            arr.push(response.x);
          });
        }
        if (startDate === yesterday) {
          volatilityhdb(yesterday, startTime, endTime).then((response) => {
            arr.push(response.x);
          });
        }
        if (startDate === twodaysago) {
          volatilityhdb(twodaysago, startTime, endTime).then((response) => {
            arr.push(response.x);
          });
        }
      }
    } else {
      if (startDate > endDate) {
        console.log("error");
      } else {
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        if (startDate === yesterday && endDate === today) {
          volatilityhdb(yesterday, startTime, "23:59:59").then((response) => {
            arr1.push(response.x);
          });
          volatilityrdb("00:00:00", endTime).then((response) => {
            arr2.push(response.x);
          });
          console.log(arr1);
          setTimeout(() => {
            for (let i in arr1) {
            arr.push(arr1[i].concat(arr2[i]));
            }
            console.log(arr);
          }, 1000);
        }
        if (startDate === twodaysago && endDate === yesterday) {
          volatilityhdb(twodaysago, startTime, "23:59:59").then((response) => {
            arr1.push(response.x);
          });
          volatilityhdb(yesterday, "00:00:00", endTime).then((response) => {
            arr2.push(response.x);
          });
          console.log(arr1);
          setTimeout(() => {
            for (let i in arr1) {
            arr.push(arr1[i].concat(arr2[i]));
            }
            console.log(arr);
          }, 1000);
        }
        if (startDate === twodaysago && endDate === today) {
          volatilityhdb(twodaysago, startTime, "23:59:59").then((response) => {
            arr1.push(response.x);
          });
          volatilityhdb(yesterday, "00:00:00", "23:59:59").then((response) => {
            arr2.push(response.x);
          });
          volatilityrdb("00:00:00", endTime).then((response) => {
            arr3.push(response.x);
          });
          console.log(arr1);
          setTimeout(() => {
            for (let i in arr1) {
            arr.push(arr1[i].concat(arr2[i],arr3[i]));
            }
            console.log(arr);
          }, 1000);
        }
      }
    }
    let times = [];
    setTimeout(() => {
      for (let i in arr[0]) {
        let hours = Math.floor(arr[0][i].i / 60);
        let mins = Math.floor(arr[0][i].i - hours * 60);
        if (mins === 0) {
          mins = "00";
        }
        times.push(hours + ":" + mins);
      }
      getCategories(times);
    }, 1000);
  }, [endDate, endTime, startDate, startTime, today, twodaysago, yesterday]);

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
    colors: [
      "#e6194B",
      "#f58231",
      "#ffe119",
      "#bfef45",
      "#3cb44b",
      "#42d4f4",
      "#4363d8",
      "#911eb4",
      "#f032e6",
      "#000000",
    ],
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
    colors: [
      "#e6194B",
      "#f58231",
      "#ffe119",
      "#bfef45",
      "#3cb44b",
      "#42d4f4",
      "#4363d8",
      "#911eb4",
      "#f032e6",
      "#000000",
    ],
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
      <div class="row" style={{ marginTop: "20px" }}>
        <div class="col-sm-6">
          <p style={{ fontSize: "20px" }}>Start Date/Time</p>

          <select
            className="form-select"
            value={startDate}
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
          >
            <option value={today}>{today1}</option>
            <option value={yesterday}>{yesterday1}</option>
            <option value={twodaysago}>{twodaysago1}</option>
          </select>

          <input
            type="time"
            step="1"
            value={startTime}
            className="form-control"
            placeholder="Time"
            onChange={(event) => {
              setStartTime(event.target.value);
            }}
            style={{ textAlign: "center" }}
          />
        </div>
        <div class="col-sm-6">
          <p style={{ fontSize: "20px" }}>End Date/Time</p>
          <select
            className="form-select"
            value={endDate}
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
          >
            <option value={today}>{today1}</option>
            <option value={yesterday}>{yesterday1}</option>
            <option value={twodaysago}>{twodaysago1}</option>
          </select>

          <input
            type="time"
            step="1"
            value={endTime}
            className="form-control"
            placeholder="Time"
            onChange={(event) => {
              setEndTime(event.target.value);
            }}
            style={{ textAlign: "center" }}
          />
        </div>
        <Chart
          type="line"
          series={Series}
          options={Options}
          width="100%"
          height="360px"
        />
        {/* <Chart
          type="area"
          series={Series}
          options={subOptions}
          width="100%"
          height="30%"
        /> */}
      </div>
    </div>
  );
};
