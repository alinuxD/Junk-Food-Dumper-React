import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class PolorChart extends Component {
  render() {
    return (
        <ReactEcharts
        option={{
            title:{
                text:"Happy"
            },
            angleAxis: {
                type: 'category',
                data: ['Walking', 'Playing Catch', 'Bird watching', 'Cleaning', 'Walking', 'Playing Catch', 'Bird watching', 'Cleaning'],
                startAngle: 75
            },
            radiusAxis: {
            
            },
            
            polar: {
                radius: [30, '80%']
            },
            series: [{
                    type: 'bar',
                    data: [17, 12, 10, 10, 17, 12, 10, 10],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a'
                }],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
       }}
    />
    );
  }
}
export default PolorChart;

