dataaaa =  [
    {
        key: "Tennis",
        color: "#404042",
        values: [
            {x: 0, y: 61013},
            {x: 1, y: 62082},

        ]
    },
    {
        key: "Basketball",
        color: "#9F96C8",
        values: [
            {x: 0, y: 70980},
            {x: 1, y: 78393},

        ]
    },
    {
        key: "Football",
        color: "#4EB5AB",
        values: [
            {x: 0, y: 30141},
            {x: 1, y: 33040},

        ]
    },
    {
        key: "Golf",
        color: "#5951A2",
        values: [
            {x: 0, y: 36488},
            {x: 1, y: 38043},

        ]
    }

]

nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      //.transitionDuration(350)
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart2 svg')
        .datum(dataaaa)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
