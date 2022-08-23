import axios from "axios";
const url = "https://81.150.99.19:8032/executeFunction";
const accept = "*/*";
const authorization = "Basic dXNlcjpwYXNz";

export function getdata() {
  axios
    .post(
      url,
      { arguments: { ed: "2022.08.08" }, function_name: ".qrestfunc.getdata3" },
      {
        headers: {
          accept,
          authorization,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function hightrade() {
  axios
    .post(
      url,
      {
        arguments: { dt: "2022.08.15", st: "10:00", et: "11:00" },
        function_name: ".qrestfunc.hightrade",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getminmaxdata(date) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { sd: date },
        function_name: ".qrestfunc.getmaxeachsym",
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

export async function rAvgTimeSeries(today) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { dt: today },
        function_name: ".qrestfunc.runningavg",
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

export async function PriceChange(date) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { sd: date },
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

export async function volatility(today) {
  try {
    let res = await axios.post(
      url,
      {
        arguments: { dt: today },
        function_name: ".qrestfunc.volatilitybyday",
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
        function_name: "currentprice0",
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
        function_name: "currentprice1",
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
        function_name: "currentprice2",
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