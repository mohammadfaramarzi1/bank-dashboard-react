import React from "react";
import { Box, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";

function CardList() {
  return (
    <Box component="div" width="100%">
      <Typography variant="span" component="p" fontSize={20} mb={1}>
        Card List
      </Typography>
      <Box component="div" sx={{display: "flex", flexDirection: "column", rowGap: 5, justifyContent: "center",}}>
        <Box
          component="div"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 10,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            columnGap: 2,
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#E7EDFF",
              width: 60,
              height: 60,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddCardIcon sx={{ color: "#396AFF", fontSize: 30 }} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Card Type
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              Secondary
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Bank
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              DBL Bank
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Card Number
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              **** **** 5600
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Namain Card
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              William{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 10,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            columnGap: 2,
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#FFE0EB",
              width: 60,
              height: 60,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddCardIcon sx={{ color: "#FF82AC", fontSize: 30 }} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Card Type
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              Secondary
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Bank
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              BRC Bank
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Card Number
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              **** **** 4300
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Namain Card
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              Michel
            </Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 10,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            columnGap: 2,
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundColor: "#FFF5D9",
              width: 60,
              height: 60,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddCardIcon sx={{ color: "#FFBB38", fontSize: 30 }} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Card Type
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              Secondary
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Bank
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              ABM Bank
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Card Number
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              **** **** 7560
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>
              Namain Card
            </Typography>
            <Typography variant="span" component="p" color="#718EBF">
              Edward
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardList;
