import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./CardsInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCardInfosFromServer } from "../../Redux/Store/card";
import { getInvestmentInfosFromServer } from "../../Redux/Store/investments";
import { getUserInfosFromServer } from "../../Redux/Store/user";
import { getTransactionsInfosFromServer } from "../../Redux/Store/transactions";

function CardsInfo({ isCardPage }) {

  const card = useSelector(state => state.card);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCardInfosFromServer())
  }, [])

  return (
    <Box component="div" color="#fff" width={isCardPage ? "100%" : 720}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="span"
          component="span"
          fontSize={20}
          color="#343C6A"
        >
          My Cards
        </Typography>
        {isCardPage ? (
          <Button
            variant="outlined"
            sx={{ color: "#343C6A", borderColor: "#343C6A" }}
          >
            +Add Card
          </Button>
        ) : (
          <Link
            to="/cards"
            style={{ fontFamily: "Roboto Medium", color: "#343C6A" }}
          >
            See All
          </Link>
        )}
      </Box>
      <Box component="div" sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {
          card[0]?.map((card, index) => <Box key={card.id} component="div" className={index === 1 ? styles.card__white : styles.card__blue}>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box component="div">
                <Typography
                  variant="span"
                  component="span"
                  sx={{ display: "block" }}
                >
                  Balance
                </Typography>
                <Typography variant="span" component="span">
                  ${card.balance.toLocaleString()}
                </Typography>
              </Box>
              <img src="/Chip_Card-min.png" />
            </Box>
            <Box
              component="div"
              sx={{
                margin: "10px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box component="div">
                <Typography
                  variant="span"
                  component="span"
                  sx={{ opacity: "70%" }}
                >
                  CARD HOLDER
                </Typography>
                <Typography variant="span" component="div">
                  {card.card_holder}
                </Typography>
              </Box>
              <Box component="div">
                <Typography
                  variant="span"
                  component="span"
                  sx={{ opacity: "70%" }}
                >
                  VALID THRU
                </Typography>
                <Typography variant="span" component="div">
                  {card.valid_thru}
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: 1,
                p: 2,
              }}
            >
              <Typography variant="span" component="span">
                {card.number}
              </Typography>
              <img src="/Group 17-min.png" alt="" />
            </Box>
          </Box>)
        }
      </Box>
    </Box>
  );
}

export default CardsInfo;
