import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";

function CardExpenseChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
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
            fontFamily: "Roboto Medium, sans-serif"
          }
      };
      myChart.setOption(option);
    }
  }, []);
  return (
    <Box component="div" mt={5}>
      <Typography variant="span" component="p" mb={1} fontSize={20}>
        Card Expense Statistics
      </Typography>
      <div
        ref={chartRef}
        style={{
          width: "580px",
          height: "600px",
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      ></div>
    </Box>
  );
}

export default CardExpenseChart;
