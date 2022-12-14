import axios from "axios";
const url = "https://81.150.99.19:8032/executeFunction";
const accept = "*/*";
const authorization = "Basic dXNlcjpwYXNz";

let day = new Date();
const today =
  day.getFullYear() + "." + (day.getMonth() + 1) + "." + day.getDate();
const yesterday =
  day.getFullYear() + "." + (day.getMonth() + 1) + "." + (day.getDate() - 1);

export async function hightrade(date) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { dt: date, st: "00:00", et: "23:59" },
        function_name: ".qrestfunc.hightrade",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.error(error);
  }
}

export async function hightraderdb(st, et) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { st: st, et: et },
        function_name: ".qrestfunc.hightraderdb",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.error(error);
  }
}

export async function hightradehdb(date, st, et) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { dt: date, st: st, et: et },
        function_name: ".qrestfunc.hightradehdb",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.error(error);
  }
}

export async function getminmaxdata(date) {
  if (date === today) {
    try {
      let res = await axios.post(
        url,
        {
          arguments: {},
          function_name: ".qrestfunc.minmax0",
        },
        {
          headers: {
            accept,
            authorization,
          },
        }
      );
      return res.data.result;
    } catch (error) {
      console.error(error);
    }
  }
  if (date === yesterday) {
    try {
      let res = await axios.post(
        url,
        {
          arguments: {},
          function_name: ".qrestfunc.minmax1",
        },
        {
          headers: {
            accept,
            authorization,
          },
        }
      );
      return res.data.result;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      let res = await axios.post(
        url,
        {
          arguments: {},
          function_name: ".qrestfunc.minmax2",
        },
        {
          headers: {
            accept,
            authorization,
          },
        }
      );
      return res.data.result;
    } catch (error) {
      console.error(error);
    }
  }
}

export async function PriceChange() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.pricechange",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function volatilityrdb(st, et) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { st: st, et: et },
        function_name: ".qrestfunc.volatilityrdb",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function volatilityhdb(dt, st, et) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { dt: dt, st: st, et: et },
        function_name: ".qrestfunc.volatilityhdb",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function currentPriceToday() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.currentprice0",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function currentPriceYesterday() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.currentprice1",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function currentPriceTwoDaysAgo() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.currentprice2",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function movingAverageToday() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.runningavg0",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function movingAverageYesterday() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.runningavg1",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}

export async function movingAverageTwoDaysAgo() {
  try {
    let res = await axios.post(
      url,
      {
        arguments: {},
        function_name: ".qrestfunc.runningavg2",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
}
