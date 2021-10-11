import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class JunkFoodConsumption extends Component {
  render() {
    return (
        <ReactEcharts option={{
            title: {
                text: "Children Daily Soft Drink Consumption",
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
                  data: ["Does not consume", "1 metric cup or less", "More then 1 to less than 2 cups", "2 metric cups or more"],
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
                    data: [57.8, 34, 3, 4.9],
                    type: "bar",

                },
                { 
                    name:"VIC",
                    data: [61.9, 32.9, 2.4, 2.3],
                    type: "bar",
  
                },
                { 
                    name:"QLD",
                    data: [56.3, 36.7, 2.9, 3.8],
                    type: "bar",

                },
                { 
                    name:"SA",
                    data: [57.6, 35.5, 2.0, 3.4],
                    type: "bar",

                },
                { 
                    name:"WA",
                    data: [60.1, 35.8, 1.6, 2.3],
                    type: "bar",

                },
                { 
                    name:"TAS*",
                    data: [91.9, 6.4, 0.6, 1.1],
                    type: "bar",

                },
                { 
                    name:"NT",
                    data: [60.9, 27.7, 2.4, 8.4],
                    type: "bar",

                },
                { 
                    name:"ACT",
                    data: [64.3, 30.4, 3.7, 2.5],
                    type: "bar",

                }
            ]}}
            style={{ height: "60vh", top: 20 }}
        />
    );
  }
}
export default JunkFoodConsumption;

