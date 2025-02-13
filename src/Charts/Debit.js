const option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ["Debit", "Credit"],
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Debit",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "credit",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value}",
      },
    },
  ],
  series: [
    {
      name: "Debit",
      type: "bar",
      tooltip: {
        valueFormatter: (value) => `${value} ml`,
      },
      data: [2.0, 14.9, 17.0, 2.2, 35.6, 7.7, 135.6],
    },
    {
      name: "Credit",
      type: "bar",
      tooltip: {
        valueFormatter: (value) => `${value} ml`,
      },
      data: [23.0, 15.9, 19.0, 75.0, 28.7, 70.7, 175.6],
    },
  ],
  textStyle: {
    fontFamily: "Roboto Medium, sans-serif",
  },
};

export default option;
