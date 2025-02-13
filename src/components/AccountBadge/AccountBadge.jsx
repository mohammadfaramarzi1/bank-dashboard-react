import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfosFromServer } from "../../Redux/Store/user";

function AccountBadge() {
  const user = useSelector((state) => state.user[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfosFromServer());
  }, []);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 7,
          p: 2,
          width: 255,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: "#FFF5D9",
            width: 70,
            height: 70,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccountBalanceIcon sx={{ fontSize: "30px", color: "#FFBB38" }} />
        </Box>
        <Box component="div">
          <Typography variant="span" component="p" color="#718EBF" mb={1}>
            My Balance
          </Typography>
          <Typography variant="span" component="p">
            ${user?.balance.toLocaleString()}
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 7,
          p: 2,
          width: 255,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: "#E7EDFF",
            width: 70,
            height: 70,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PaymentsIcon sx={{ fontSize: "30px", color: "#396AFF" }} />
        </Box>
        <Box component="div">
          <Typography variant="span" component="p" color="#718EBF" mb={1}>
            Income
          </Typography>
          <Typography variant="span" component="p">
            ${user?.income.toLocaleString()}
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 7,
          p: 2,
          width: 255,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: "#FFE0EB",
            width: 70,
            height: 70,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PriceChangeIcon sx={{ fontSize: "30px", color: "#FF82AC" }} />
        </Box>
        <Box component="div">
          <Typography variant="span" component="p" color="#718EBF" mb={1}>
            Expense
          </Typography>
          <Typography variant="span" component="p">
            ${user?.expense.toLocaleString()}
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 7,
          p: 2,
          width: 255,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: "#DCFAF8",
            width: 70,
            height: 70,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocalAtmIcon sx={{ fontSize: "30px", color: "#16DBCC" }} />
        </Box>
        <Box component="div">
          <Typography variant="span" component="p" color="#718EBF" mb={1}>
            Total Saving
          </Typography>
          <Typography variant="span" component="p">
            ${user?.total_saving.toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AccountBadge;
