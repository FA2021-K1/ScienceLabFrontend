import React, { Component } from "react";
import ReactApexCharts from 'react-apexcharts'
import Chart from "react-apexcharts";

//https://apexcharts.com/javascript-chart-demos/line-charts/syncing-charts/

class ZoomableChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'XYZ MOTORS',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
                chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                title: {
                    text: 'Stock Price Movement',
                    align: 'left'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                    title: {
                        text: 'Price'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                    }
                }
            },


        };
    }



    render() {
        return (



            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>



        );
    }
}

export default ZoomableChart;