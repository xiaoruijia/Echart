import React, {useEffect} from 'react';
import logo from './logo.svg';
import * as echarts from 'echarts';
import './App.css';

function App() {
    let data = {
        'result': [
            ['date', '1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7'],
            ['打开', 200, 300, 400, 500, 600, 700, 800],
            ['点击', 1200, 1800, 2100, 2200, 3882, 5100, 2820],
            ['安装', 100, 230, 200, 230, 30, 50, 70]
        ]
    }
    useEffect(() => {
        let myChart = echarts.init(document.getElementById('main')!);
        let myChart2 = echarts.init(document.getElementById('main2')!);
        let option = {
            title: {},
            tooltip: {
                trigger: 'item',
                formatter: '点击：<br/>{b} : {c}%'
            },
            toolbox: {
                orient: 'vertical',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'Funnel',
                    type: 'funnel',
                    label: {
                        position: 'right'
                    },
                    data: [
                        {value: 60, name: '点击'},
                        {value: 30, name: '打开'},
                        {value: 10, name: '安装'},
                    ]
                },
            ]
        }
        let option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data: ['Evaporation', 'Precipitation', 'Temperature']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Precipitation',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: 'Temperature',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: 'Evaporation',
                    type: 'bar',
                    tooltip: {
                        valueFormatter: function (value: any) {
                            return value + ' ml';
                        }
                    },
                    data: [
                        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                    ]
                },
                {
                    name: 'Precipitation',
                    type: 'bar',
                    tooltip: {
                        valueFormatter: function (value: any) {
                            return value + ' ml';
                        }
                    },
                    data: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                    ]
                },
                {
                    name: 'Temperature',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value: any) {
                            return value + ' °C';
                        }
                    },
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        myChart.setOption(option);
        myChart2.setOption(option2);
    }, [])
    return (
        <div className="App">
            <div className='echarts' id='main'/>
            <div className='echarts' id='main2'/>
        </div>
    );
}

export default App;
