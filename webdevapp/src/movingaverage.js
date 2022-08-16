import * as React from 'react';
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import * as ReactDOM from 'react-dom';
import { rAvgTimeSeries } from './getdata.service.js';



      export class ApexChart extends React.Component {
        
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              data: rAvgTimeSeries()
            }],
            options: {
              chart: {
                id: 'chart2',
                type: 'line',
                height: 230,
                toolbar: {
                  autoSelected: 'pan',
                  show: false
                }
              },
              colors: ['#546E7A'],
              stroke: {
                width: 3
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                opacity: 1,
              },
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime'
              }
            },
          
            seriesLine: [{
              data: rAvgTimeSeries()
            }],
            optionsLine: {
              chart: {
                id: 'chart1',
                height: 130,
                type: 'area',
                brush:{
                  target: 'chart2',
                  enabled: true
                },
                selection: {
                  enabled: true,
                  xaxis: {
                    
                  }
                },
              },
              colors: ['#008FFB'],
              fill: {
                type: 'gradient',
                gradient: {
                  opacityFrom: 0.91,
                  opacityTo: 0.1,
                }
              },
              xaxis: {
                type: 'datetime',
                tooltip: {
                  enabled: false
                }
              },
              yaxis: {
                tickAmount: 2
              }
            },
          
          
          };
        }
        render() {
          return (
      <div id="wrapper">
  <div id="chart-line2">
  <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={230} />
</div>
  <div id="chart-line">
  <ReactApexChart options={this.state.optionsLine} series={this.state.seriesLine} type="area" height={130} />
</div>
</div>
          );
        }
      }
      const domContainer = document.querySelector('#app');
      React.createRoot(React.createElement(ApexChart), domContainer);
    