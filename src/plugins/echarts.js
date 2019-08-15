import echarts from 'echarts'
// 将echarts挂在到vue实例对象上
const install = function (Vue) {
    // 双向数据绑定原理
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    line: function (id,data) {
                        // 初始化Echarts的操作
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        // 配置参数
                        var option = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data,
                                type: 'line'
                            }]
                        };

                        // 设置参数
                        this.chart.setOption(option);
                    },
                    radar: function (id) {
                        // 初始化Echarts的操作
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        var option = {
                            backgroundColor: '#161627',
                            title: {
                                text: '雷达图'
                            },
                            tooltip: {
                                trigger: 'item'
                            },
                            radar: {                              //雷达图使用 radar 组件作为其坐标系
                                indicator: [                     //雷达图的指示器
                                    { name: '外观', max: 100 },
                                    { name: '拍照', max: 100 },
                                    { name: '系统', max: 100 },
                                    { name: '性能', max: 100 },
                                    { name: '屏幕', max: 100 }
                                ],
                                name: {                          //雷达图每个指示器名称的配置项。
                                    color: 'rgb(238, 197, 102)'
                                },
                                nameGap: 5,                       //指示器名称和指示器轴的距离。
                                splitLine: {                     //坐标轴在 grid 区域中的分隔线样式。
                                    lineStyle: {
                                        color: [
                                            'rgba(238, 197, 102, 0.2)', 'rgba(238, 197, 102, 0.3)',
                                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                                        ].reverse()
                                    }
                                },
                                splitArea: {                     //不显示区域
                                    show: false
                                },
                                axisLine: {                     //刻度线样式
                                    lineStyle: {
                                        color: 'rgb(238, 197, 102)'
                                    }
                                },
                                shape: 'circle',                 //雷达图绘制类型  支持 'polygon' 和 'circle'
                                center: ['50%', '50%'],
                                radius: '80%',
                                startAngle: 90

                            },

                            series: [
                                {
                                    name: '雷达',
                                    type: 'radar',
                                    symbol: 'circle',            //标记的图形。
                                    itemStyle: {                //折线拐点标记的样式。
                                        normal: {
                                            color: '#B3E4A1'
                                        }
                                    },
                                    lineStyle: {                 //线条样式。
                                        normal: {
                                            type: 'dotted',
                                            width: 1,
                                            opacity: 0.8
                                        }
                                    },
                                    areaStyle: {                //区域填充样式。
                                        normal: {
                                            opacity: 0.8
                                        }
                                    },
                                    label: {                     //图形上的文本标签，可用于说明图形的一些数据信息
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data: [
                                        {
                                            value: [85, 90, 90, 95, 95],
                                            name: '某手机'
                                        }
                                    ]
                                }
                            ]
                        };

                        // 设置参数
                        this.chart.setOption(option);
                    },
                    myMap: function (id) {
                        // 初始化Echarts的操作
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        var option = {
                            tooltip: {},
                            /*方法二 */
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china',
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: 'rgba(0,0,0,0.4)'
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0.1)',
                                        borderColor: 'rgba(118,237,236,1)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(118,237,236,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        };

                        // 设置参数
                        this.chart.setOption(option);
                    }
                }
            }
        }
    })
}
export default {
    install
}