import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./CardsInfo.module.css";

function CardsInfo({ isCardPage }) {
  return (
    <Box component="div" color="#fff">
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
          fontFamily="Roboto Medium"
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
      <Box component="div" sx={{ display: "flex", columnGap: 2 }}>
        <Box component="div" className={styles.card__blue}>
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
                $5,756
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
                Eddy Cusuma
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
                12/22
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
              3778 **** **** 1234
            </Typography>
            <img src="/Group 17-min.png" alt="" />
          </Box>
        </Box>
        <Box component="div" className={styles.card__white}>
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
                $5,756
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
                Eddy Cusuma
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
                12/22
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
              3778 **** **** 1234
            </Typography>
            <img src="/Group 17-min.png" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardsInfo;
