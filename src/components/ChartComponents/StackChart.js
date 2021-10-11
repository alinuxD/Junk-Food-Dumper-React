import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class StackChart extends Component {
  render() {
    return (
        <ReactEcharts option={{
            title: {
                text: "Children Body Mass Index Proportion",
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
                  data: ["VIC", "NSW", "QLD", "SA*", "WA", 
                  "TAS*", "NT*", "ACT*"],
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
                    name:"Underweight",
                    data: [9.1, 2, 10.3, 4.6, 7.2, 4.5, 3.5, 8.5],
                    type: "bar",
                    stack:"stackbar"
                },
                { 
                    name:"Normal",
                    data: [71.5, 78.3, 68.3, 57, 70.4, 58.7, 61.2, 61.9],
                    type: "bar",
                    stack: "stackbar"
                },
                { 
                    name:"Overweight",
                    data: [14.6, 11.8, 13.6, 21.8, 15.9, 21.5, 24.7, 23.3],
                    type: "bar",
                    stack: "stackbar"
                },
                { 
                    name:"Obese",
                    data: [7, 8, 10.2, 9, 7.7, 24.2, 4.7, 0],
                    type: "bar",
                    stack: "stackbar"
                }
            ]}}
            style={{ height: "60vh", top: 20 }}
        />
    );
  }
}
export default StackChart;

