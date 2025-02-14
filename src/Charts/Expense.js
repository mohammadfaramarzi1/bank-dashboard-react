const option = {
  legend: {
    top: "bottom",
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [50, 250],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: "DBL Bank" },
        { value: 38, name: "BRC Bank" },
        { value: 32, name: "ABM Bank" },
        { value: 30, name: "MCP Bank" },
      ],
    },
  ],
  textStyle: {
    fontFamily: "Roboto Medium, sans-serif",
  },
};

export default option