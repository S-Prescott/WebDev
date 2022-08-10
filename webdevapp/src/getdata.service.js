import axios from 'axios';


const url = 'https://81.150.99.19:8045/executeFunction';
const accept = '*/*';
const authorization = 'Basic dXNlcjpwYXNz';

export function getdata() {
  axios.post(url,
    {arguments:{ed:'2022.08.08'},
    function_name:'.qrestfunc.getdata3'    
    },
    {headers:{
      accept, authorization
    }})
    .then(response => {
      console.log(response);
      return response
    })
    .catch(error => {
      console.log(error)
    })
  }
