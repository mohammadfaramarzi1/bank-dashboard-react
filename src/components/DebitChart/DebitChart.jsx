import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";
import option from "../../Charts/Debit";

function DebitChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.setOption(option);
    return () => myChart.dispose();
  }, []);
  return (
    <Box component="div">
      <Typography variant="span" component="p" fontSize={20} mb={1}>
        Debit & Credit Overview
      </Typography>
      <div
        ref={chartRef}
        style={{
          width: "850px",
          height: "400px",
          backgroundColor: "#fff",
          p: 2,
          borderRadius: 25,
        }}
      ></div>
    </Box>
  );
}

export default DebitChart;
