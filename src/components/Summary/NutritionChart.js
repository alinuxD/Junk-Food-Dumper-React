import React from 'react'
import ReactEcharts from 'echarts-for-react';

function round(number, precision) {
    return Math.round(+number + 'e' + precision) / Math.pow(10, precision);
}

function customData(data) {
    const session = '2,800 - 3,200'
    const intake = parseInt(session.slice(-5).replace(',',''))
    const protein = 34
    const fat = 79
    const carb = 25

    let temp = []
    // for (let i=0;i<data.length;i++){
    //
    // }
    temp[0] = Math.round(data[0]/intake*100);
    temp[1] = Math.round(data[1]/protein*100);
    temp[2] = Math.round(data[2]/fat*100);
    // temp[3] = Math.round(data[3]/carb*100);

    for (let i=0;i<temp.length;i++){
        const tempValue =temp[i]
        if (tempValue>100){

            temp[i] = {
                value: tempValue,
                itemStyle: {
                    color: '#e40000'
                }
            }
        }else if (tempValue<60){
            temp[i] = {
                value: tempValue,
                itemStyle: {
                    color: '#f5ff00'
                }
            }
        }
    }
    return temp
}

function NutritionChart({data}) {


    return(
        <>

        <ReactEcharts
            option = {{
                title: {
                text: "Total nutrition in percentage",
                textAlign: "left",
                left: "5%"},

                tooltip: {
                trigger:'item',
                backgroundColor: "#FFF",
                borderWidth: 0,
                padding: 10 ,
                formatter: '{b}: {c} %'
            },
                xAxis: {
                type: 'category',
                data: ['Calories', 'Protein', 'Fat']
            },
                yAxis: {
                    max: function (value) {
                        if(value.max>100){
                            return (value.max);
                        }
                        else{
                            return 100
                        }
                    },
                    type: 'value',

            },
                series: [
            {
                color:'rgba(197,250,118,0.93)',
                data: customData(data),
                type: 'bar'
            }
                ]
            }}
        />
        </>
    )
}

export default NutritionChart