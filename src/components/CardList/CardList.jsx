import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useDispatch, useSelector } from "react-redux";
import { getCardInfosFromServer } from "../../Redux/Store/card";

function CardList() {
  const cards = useSelector((state) => state.card[0]);
  console.log(cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardInfosFromServer());
  }, []);

  return (
    <Box component="div" width="100%">
      <Typography variant="span" component="p" fontSize={20} mb={1}>
        Card List
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 5,
          justifyContent: "center",
        }}
      >
        {cards?.map((card, index) => (
          <Box
            key={card.id}
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
            {index === 1 ? (
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
            ) : (
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
            )}

            <Box component="div">
              <Typography variant="span" component="p" mb={1}>
                Card Type
              </Typography>
              <Typography variant="span" component="p" color="#718EBF">
                {card?.type}
              </Typography>
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" mb={1}>
                Bank
              </Typography>
              <Typography variant="span" component="p" color="#718EBF">
                {card?.bank}
              </Typography>
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" mb={1}>
                Card Number
              </Typography>
              <Typography variant="span" component="p" color="#718EBF">
                {card?.number}
              </Typography>
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" mb={1}>
                Namain Card
              </Typography>
              <Typography variant="span" component="p" color="#718EBF">
                {card?.naming}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CardList;
