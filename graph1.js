emoryData =  [
     {
        key: "Bronze",
        color: "#E46E34",
        value: 700,
        label: "Bronze"
      },
      {
         key: "Silver",
         color: "#AFACB3",
         value: 56,
         label: "Silver"
       },
       {
          key: "Gold",
          color: "#D7C077",
          value: 11,
          label: "Gold"
        },
        {
           key: "Green",
           color: "#124947",
           value: 12,
           label: "Green"
         },
         {
            key: "Silver",
            color: "#636366",
            value: 1,
            label: "Silver"
          }

]



nv.addGraph(function() {
  var emoryChart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)


    d3.select("#emoryChart svg")
        .datum(emoryData)
      .transition().duration(1200)
        .call(emoryChart);

  return emoryChart;
});
