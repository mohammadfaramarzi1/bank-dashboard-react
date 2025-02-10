import React from "react";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import { Box } from "@mui/material";
import Calender from "../../components/Calender/Calender";
import WeekCharts from "../../components/WeekCharts/WeekCharts";

function Dashboard() {
  return (
    <Box component="div" sx={{ mr: 2 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardsInfo />
        <Calender />
      </Box>
      <WeekCharts />
    </Box>
  );
}

export default Dashboard;
