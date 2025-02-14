import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";
import option from "../../Charts/Expense";

function CardExpenseChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      myChart.setOption(option);
    }
  }, []);
  return (
    <Box component="div">
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
