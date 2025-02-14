import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ConstructionIcon from "@mui/icons-material/Construction";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionsInfosFromServer } from "../../Redux/Store/transactions";

function LastTransactions() {
  const transactions = useSelector((state) => state.transactions[0]?.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsInfosFromServer());
  }, []);

  return (
    <Box component="div" mt={5}>
      <Typography variant="span" component="p" fontSize={20}>
        Last Transaction
      </Typography>
      <Box
        component="div"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 12,
          p: 2,
          my: 2,
          color: "#718EBF",
          textAlign: "center",
        }}
      >
        {transactions?.slice(0, 3).map((transaction) => (
          <Box
          key={transaction.Tid}
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2
            }}
          >
            {transaction.type === "Shopping" && (
              <Box
                component="div"
                sx={{
                  backgroundColor: "#DCFAF8",
                  width: 55,
                  height: 55,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NotificationsIcon sx={{ color: "#16DBCC", fontSize: 30 }} />
              </Box>
            )}
            {transaction.type === "Service" && (
              <Box
                component="div"
                sx={{
                  backgroundColor: "#E7EDFF",
                  width: 55,
                  height: 55,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ConstructionIcon sx={{ color: "#396AFF", fontSize: 30 }} />
              </Box>
            )}

            {transaction.type === "Transfer" && (
              <Box
                component="div"
                sx={{
                  backgroundColor: "#FFE0EB",
                  width: 55,
                  height: 55,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonIcon sx={{ color: "#FF82AC", fontSize: 30 }} />
              </Box>
            )}

            <Box component="div">
              <Typography variant="span" component="p" mb={1} color="#343C6A">
                {transaction.desc}
              </Typography>
              <Typography variant="span" component="p">
                {transaction.date}
              </Typography>
            </Box>
            <Typography variant="span" component="p">
              {transaction.type}
            </Typography>
            <Typography variant="span" component="p">
              {transaction.status}
            </Typography>
            <Typography variant="span" component="p">
              {transaction.Tid}
            </Typography>
            <Typography
              variant="span"
              component="p"
              sx={
                transaction.amount.startsWith("+")
                  ? { color: "#16DBAA" }
                  : { color: "#FE5C73" }
              }
            >
              {transaction.amount}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LastTransactions;
