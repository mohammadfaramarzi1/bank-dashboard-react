import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import CardExpenseChart from "../../components/CardExpenseChart/CardExpenseChart";
import CardList from "../../components/CardList/CardList";
import AddCard from "../../components/AddCard/AddCard";
import CardSetting from "../../components/CardSetting/CardSetting";

function Cards() {
  return (
    <Box component="div" mr={2}>
      <CardsInfo isCardPage={true} />
      <Box component="div" sx={{ display: "flex", mt: 5, columnGap: 3 }}>
        <CardExpenseChart />
        <CardList />
      </Box>
      <Box component="div" sx={{mt: 5, display: "flex", columnGap: 3}}>
        <AddCard />
        <CardSetting />
      </Box>
    </Box>
  );
}

export default Cards;
