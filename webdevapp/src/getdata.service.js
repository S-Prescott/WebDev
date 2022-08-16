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
      console.log(response);
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
      console.log(response);
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
        arguments: { sd: "2022.08.16" },
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
    // .then(response => {
    //   const minmax = response
    //   //console.log(minmax);
    //   return minmax
    // })
    console.error(error);
  }
}

export function rAvgTimeSeries() {
  axios
    .post(
      url,
      {
        arguments: { st: "00:00", et: "23:59", sm: "GOOG" },
        function_name: ".qrestfunc.runningavg",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function PriceChange() {
  axios
    .post(
      url,
      {
        arguments: { sd: "2022.08.16"},
        function_name: ".qrestfunc.pricechange",
      },
      {
        headers: {
          accept,
          authorization,
        },
      }
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
