import React, { useEffect } from "react";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import { Box } from "@mui/material";
import Calender from "../../components/Calender/Calender";
import WeekCharts from "../../components/WeekCharts/WeekCharts";
import BalanceChart from "../../components/BalanceChart/BalanceChart";

function Dashboard() {


  
  return (
    <Box component="div" sx={{ mr: 2 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardsInfo isCardPage={false} />
        <Calender />
      </Box>
      <WeekCharts />
      <BalanceChart />
    </Box>
  );
}

export default Dashboard;
