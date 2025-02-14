const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLabel: {
      fontFamily: "Roboto Medium, sans-serif",
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontFamily: "Roboto Medium, sans-serif",
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
  textStyle: {
    fontFamily: "Roboto Medium, sans-serif",
  },
};


export default option