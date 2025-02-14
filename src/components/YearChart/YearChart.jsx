import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import * as echarts from "echarts";
import option from "../../Charts/Year";

function YearChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      myChart.setOption(option);
    }
  }, []);
  return (
    <Box component="div" mt={5}>
      <Typography variant="span" component="p" fontSize={20} mb={1}>
        Yearly Total Investment
      </Typography>
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      />
    </Box>
  );
}

export default YearChart;
