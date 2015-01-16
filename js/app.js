$(function () {
    //barchart
    $('#bar-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });


    //area chart
    $(function () {
    $('#area-chart').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Portfolio value'
        },
       // subtitle: {
       //     text: ''
       // },
        xAxis: {
            allowDecimals: false,
            type: 'datetime',

        },
        yAxis: {
            title: {
                text: 'Portfolio value £'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '<strong>£{point.y:,.0f}</strong>'
        },
        plotOptions: {
            area: {
                pointStart: 1,
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            series: {
                pointStart: Date.UTC(2010, 0, 1),
                pointInterval: 24 * 3600 * 10000 // one day
            }
        },
        series: [{
            name: 'Portfolion value £',
            data: [ 2000, 2000, 2100, 3100, 3200,
                    3300, 3400, 4500, 4600, 4000,
                    4100, 4200, 4300, 6000, 6010,
                    6022, 6022, 6022, 7000, 7000,
                    7100, 7100, 7200, 7000, 8000, 8050,
                    8300, 8400, 8800, 9600, 9000,
                    9100, 9200, 9300, 10000, 10010,
                    10022, 10022, 10022]
        }]
    });
});

// column chart
$(function () {
    $('#column-chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Defaults for current loan market'
        },
        xAxis: {
            categories: ['Last 12 months', '13-24 months ago', '25-36 months ago', '37-48 months ago', '49-60 months ago'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            minRange: 7,
            title: {
                text: 'Percentage %'
            },
            labels: {
                overflow: 'middle',
                format: '{value}%'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }

            },
            series: {
                stacking: 'normal'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 80,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Target performance',
            data: [0.38, 0.99, 1.27, 1.61, 1.90]
        },
        {
            name: 'Expected default from current arrears',
            data: [0.20, 0.15, 0.15, 0.11, 0.16],
            stack: 'default'
        },
        {
            name: 'Actual default',
            data: [0.12, 0.28, 0.43, 0.73, 1.57],
            stack: 'default'
        } ]
    });
});


});

