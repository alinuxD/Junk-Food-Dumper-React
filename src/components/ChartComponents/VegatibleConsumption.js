import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class VegConsumption extends Component {
  render() {
    return (
        <ReactEcharts option={{
            title: {
                text: "Children Daily Vegetables Consumption",
                subtext: "Data from Australian Bureau of Statistics 2017-2018",
                textAlign: "left",
                left: "5%"},

            tooltip: { 
                trigger:'item',
                backgroundColor: "#FFF", 
                borderWidth: 0, 
                padding: 10 ,
                formatter: '{a} <br/>{b}: {c} %'
            },

            legend: {
                orient: 'horizontal',
                right: "11%"

              },

              xAxis: [
                {
                  axisLabel: {
                    interval: 0,
                    rotate: 0,
                    textStyle: {
                      baseline: "top",
                      color: "#333",
                      fontSize: 12,
                      fontWeight: "bold"
                    }
                  },
                  axisLine: { lineStyle: { color: "#aaa" }, show: true },
                  axisTick: { show: false },
                  data: ["Less Then 1 Serve", "1 Serve", "2 Serves", "3 Serves", "4 Servers", 
                  "5 or More Serves"],
                  splitLine: { show: false },
                  type: "category"
                }
              ],
              
            
            yAxis: [
                {
                  axisLabel: {
                    textStyle: { fontSize: 10 },
                    formatter: '{value} %'
                  },
                  axisLine: { show: true },
                  axisTick: { show: false },
                  splitLine: {
                    lineStyle: {
                      type: "dotted"
                    }
                  },
                  type: "value"
                }
              ],
            
            series: [
                
                { 
                    name:"NSW",
                    data: [11, 30.2, 27.7, 17, 8.2, 5.9],
                    type: "bar",

                },
                { 
                    name:"VIC",
                    data: [10.7, 30.7, 31.6, 14, 8.6, 5.3],
                    type: "bar",
  
                },
                { 
                    name:"QLD",
                    data: [12.6, 32.1, 31, 16.4, 4.2, 4.1],
                    type: "bar",

                },
                { 
                    name:"SA",
                    data: [12.5, 36.8, 28.6, 17.7, 4.1, 2.2],
                    type: "bar",

                },
                { 
                    name:"WA",
                    data: [12, 32.9, 24.8, 19, 6.7, 5.4],
                    type: "bar",

                },
                { 
                    name:"TAS",
                    data: [9.7, 24.5, 23.7, 24.9, 12.9, 6.1],
                    type: "bar",

                },
                { 
                    name:"NT",
                    data: [13.2, 29.8, 26.4, 16.6, 7.4, 4.5],
                    type: "bar",

                },
                { 
                    name:"ACT",
                    data: [11.4, 31.6, 25.3, 21.9, 6.1, 3.5],
                    type: "bar",

                }
            ]}}
            style={{ height: "60vh", top: 20 }}
        />
    );
  }
}
export default VegConsumption;

