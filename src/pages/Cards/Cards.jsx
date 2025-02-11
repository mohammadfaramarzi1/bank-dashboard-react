import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import CardExpenseChart from "../../components/CardExpenseChart/CardExpenseChart";
import CardList from "../../components/CardList/CardList";
import AddCard from "../../components/AddCard/AddCard";

function Cards() {
  return (
    <Box component="div" mr={2}>
      <CardsInfo isCardPage={true} />
      <Box component="div" sx={{ display: "flex", mt: 5, columnGap: 3 }}>
        <CardExpenseChart />
        <CardList />
      </Box>
      <Box component="div" mt={5}>
        <AddCard />
      </Box>
    </Box>
  );
}

export default Cards;
