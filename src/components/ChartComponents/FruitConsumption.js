import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class FruitConsumption extends Component {
  render() {
    return (
        <ReactEcharts option={{
            title: {
                text: "Children Daily Fruit Consumption",
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
                  data: ["Less Then 1 Serve", "1 Serve", "2 Serves", "3 Serves*", "4 Servers", 
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
                    data: [8.7, 23.4, 32.5, 19.9, 8.2, 6],
                    type: "bar",

                },
                { 
                    name:"VIC",
                    data: [4.2, 22.1, 36.3, 24.7, 7.9, 4.2],
                    type: "bar",
  
                },
                { 
                    name:"QLD",
                    data: [7.1, 23.2, 34.8, 22.5, 7.9, 4.7],
                    type: "bar",

                },
                { 
                    name:"SA",
                    data: [8.7, 24.7, 38.8, 21.3, 5.1, 2],
                    type: "bar",

                },
                { 
                    name:"WA",
                    data: [5.3, 20, 36.2, 23.3, 9.2, 4.3],
                    type: "bar",

                },
                { 
                    name:"TAS",
                    data: [3.3, 25.6, 32.6, 24.4, 8.3, 5.1],
                    type: "bar",

                },
                { 
                    name:"NT",
                    data: [7.4, 22.2, 32.5, 21.1, 5.8, 10.3],
                    type: "bar",

                },
                { 
                    name:"ACT",
                    data: [6.7, 25.1, 38.4, 19.7, 7.9, 1.7],
                    type: "bar",

                }
            ]}}
            style={{ height: "60vh", top: 20 }}
        />
    );
  }
}
export default FruitConsumption;

