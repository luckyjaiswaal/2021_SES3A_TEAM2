import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie';  //饼状图
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

export default class PieChart extends Component{
    componentDidMount() {
        var huan_val = document.getElementsByClassName("huan")[0];
        var chart = echarts.init(huan_val);
        let option = {
            title: {
                text: 'Distribution',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
            },
            series: [
                {
                    name: 'test',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {value: 1048, name: 'aaa'},
                        {value: 735, name: 'bbb'},
                        {value: 580, name: 'ccc'},
                        {value: 484, name: 'ddd'},
                        {value: 300, name: 'eee'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        
        chart.setOption(option);
    }
    render(){
        return(
            <div style={{ width: 100, height: 100 }} className="huan"></div>
        )
    }

}