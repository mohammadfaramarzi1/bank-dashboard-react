import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";

function WeekCharts() {
  const firstChartRef = useRef(null);
  const secondChartRef = useRef(null);
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
  useEffect(() => {
    if (!firstChartRef.current) return;
    const myChart = echarts.init(firstChartRef.current);
    const stackInfo = {};
    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) continue;
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = { stackStart: [], stackEnd: [] };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data && data !== "-") {
          if (info.stackStart[i] == null) info.stackStart[i] = j;
          info.stackEnd[i] = j;
        }
      }
    }

    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data;
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 20 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j],
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
          },
        };
      }
    }

    const option = {
      textStyle: {
        fontFamily: "Roboto Medium, Vazirmatn, Arial, sans-serif",
        fontSize: 20,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: { type: "value" },
      series: series,
    };

    myChart.setOption(option);
    return () => myChart.dispose();
  }, []);
  useEffect(() => {
    if (!secondChartRef.current) return;
    const myChart = echarts.init(secondChartRef.current);

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          padAngle: 4,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "Roboto Medium",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Entertainment" },
            { value: 735, name: "Bill Expense" },
            { value: 580, name: "Investment" },
            { value: 484, name: "Others" },
          ],
        },
      ],
    };

    myChart.setOption(option);
    return () => myChart.dispose();
  }, []);

  return (
    <Box
      component="div"
      sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}
    >
      <Box component="div">
        <Typography variant="span" component="p" fontSize={20} mb={2}>
          Weekly Activity
        </Typography>
        <div
          ref={firstChartRef}
          style={{
            width: "730px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: 25,
          }}
        ></div>
      </Box>
      <Box component="div">
        <Typography variant="span" component="p" fontSize={20} mb={2}>
          Expense Statistics
        </Typography>
        <div
          ref={secondChartRef}
          style={{
            width: "500px",
            height: "400px",
            backgroundColor: "#fff",
            borderRadius: 25,
          }}
        ></div>
      </Box>
    </Box>
  );
}

export default WeekCharts;
