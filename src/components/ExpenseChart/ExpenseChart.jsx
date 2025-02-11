import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";

function ExpenseChart() {
  const chartRef = useRef(null);
  let app = { count: 11 };
  useEffect(() => {
    if (!chartRef.current) return;
    const myChart = echarts.init(chartRef.current);

    const categories = Array.from({ length: 10 }, (_, i) =>
      new Date(Date.now() - (9 - i) * 2000)
        .toLocaleTimeString()
        .replace(/\^\D*/, "")
    );
    const categories2 = Array.from({ length: 10 }, (_, i) => i);
    const data = Array.from({ length: 10 }, () =>
      Math.round(Math.random() * 1000)
    );
    const data2 = Array.from(
      { length: 10 },
      () => +(Math.random() * 10 + 5).toFixed(1)
    );

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross", label: { backgroundColor: "#283b56" } },
      },
      legend: {},
      toolbox: {
        show: true,
      },
      dataZoom: { show: false, start: 0, end: 100 },
      xAxis: [
        { type: "category", boundaryGap: true, data: categories },
        { type: "category", boundaryGap: true, data: categories2 },
      ],
      yAxis: [
        {
          type: "value",
          scale: true,
          name: "Price",
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2],
        },
        {
          type: "value",
          scale: true,
          name: "Order",
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2],
        },
      ],
      series: [
        {
          name: "This Year",
          type: "bar",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data,
        },
        { name: "Last Year", type: "line", data: data2 },
      ],
      textStyle: {
        fontFamily: "Roboto Medium, sans-serif",
      },
    };

    myChart.setOption(option);

    const interval = setInterval(() => {
      const axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
      data.shift();
      data.push(Math.round(Math.random() * 1000));
      data2.shift();
      data2.push(+(Math.random() * 10 + 5).toFixed(1));
      categories.shift();
      categories.push(axisData);
      categories2.shift();
      categories2.push(app.count++);

      myChart.setOption({
        xAxis: [{ data: categories }, { data: categories2 }],
        series: [{ data }, { data: data2 }],
      });
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box component="div">
      <Typography
        variant="span"
        component="p"
        fontSize={20}
        color="#343C6A"
        mb={2}
      >
        My Expense
      </Typography>
      <div
        ref={chartRef}
        style={{
          width: "540px",
          height: "380px",
          backgroundColor: "#fff",
          borderRadius: 25,
        }}
      ></div>
    </Box>
  );
}

export default ExpenseChart;
