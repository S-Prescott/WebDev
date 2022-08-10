import React from 'react';
import axios from 'axios';

export default class data extends React.Component {

  getdata() {
    axios.post('https://81.150.99.19:8032/executeFunction',
      {arguments:{ed:'2022.08.08'},
      function_name:'.qrestfunc.getdata3'    
      },
      {headers:{
        "Accept": "*/*",
        "Authorization": "Basic dXNlcjpwYXNz"
      }})
      .then(response => {
        console.log(response);
        return response
      })
    }

}