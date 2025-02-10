import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";

function BalanceChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (!chartRef.current) return;
    const myChart = echarts.init(chartRef.current);

    const option = {
      color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Jan",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: { width: 0 },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(128, 255, 165)" },
              { offset: 1, color: "rgb(1, 191, 236)" },
            ]),
          },
          emphasis: { focus: "series" },
          data: [140, 232, 101, 264, 90, 340, 250],
        },
        {
          name: "Feb",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: { width: 0 },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(0, 221, 255)" },
              { offset: 1, color: "rgb(77, 119, 255)" },
            ]),
          },
          emphasis: { focus: "series" },
          data: [120, 282, 111, 234, 220, 340, 310],
        },
        {
          name: "March",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: { width: 0 },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(55, 162, 255)" },
              { offset: 1, color: "rgb(116, 21, 219)" },
            ]),
          },
          emphasis: { focus: "series" },
          data: [320, 132, 201, 334, 190, 130, 220],
        },
        {
          name: "Apr",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: { width: 0 },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(255, 0, 135)" },
              { offset: 1, color: "rgb(135, 0, 157)" },
            ]),
          },
          emphasis: { focus: "series" },
          data: [220, 402, 231, 134, 190, 230, 120],
        },
      ],
    };

    myChart.setOption(option);
    return () => myChart.dispose();
  }, []);

  return (
    <Box component="div" sx={{mt: 5}}>
      <Typography
        variant="span"
        component="p"
        fontSize={20}
        mb={2}
      >
        Balance History
      </Typography>
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "#fff",
          borderRadius: 25,
        }}
      ></div>
    </Box>
  );
}

export default BalanceChart;
