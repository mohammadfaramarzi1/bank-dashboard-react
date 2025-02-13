const series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "bar",
    stack: "a",
    name: "a",
  },
  {
    data: [10, 46, 64, "-", 0, "-", 0],
    type: "bar",
    stack: "a",
    name: "b",
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "a",
    name: "c",
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "b",
    name: "d",
  },
  {
    data: [10, 20, 150, 0, "-", 50, 10],
    type: "bar",
    stack: "b",
    name: "e",
  },
];

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: series,
};

export { series, option };
