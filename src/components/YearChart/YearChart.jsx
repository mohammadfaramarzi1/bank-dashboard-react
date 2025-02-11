import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";

function YearChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            fontFamily: "Roboto Medium, sans-serif"
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            fontFamily: "Roboto Medium, sans-serif"
          }
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
        textStyle: {
          fontFamily: "Roboto Medium, sans-serif"
        },
      };
      myChart.setOption(option);
    }
  }, []);
  return (
    <Box component="div" mt={5}>
      <Typography variant="span" component="p" fontSize={20} mb={1}>
        Yearly Total Investment
      </Typography>
      <div ref={chartRef} style={{ width: "100%", height: "400px", backgroundColor: "#fff", borderRadius: 15 }} />
    </Box>
  );
}

export default YearChart;
