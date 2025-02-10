import React from "react";
import { Box, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonIcon from '@mui/icons-material/Person';

function LastTransactions() {
  return (
    <Box component="div" mt={5}>
      <Typography variant="span" component="p" fontSize={20}>
        Last Transaction
      </Typography>
      <Box component="div" sx={{backgroundColor: "#fff", borderRadius: 12, p: 2, my: 2, color: "#718EBF", textAlign: "center"}}>
        <Box component="div" sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Box component="div" sx={{backgroundColor: "#DCFAF8", width: 55, height: 55, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <NotificationsIcon sx={{color: "#16DBCC", fontSize: 30}} />
            </Box>
            <Box component="div">
            <Typography variant="span" component="p" mb={1} color="#343C6A">Spotify Subscription</Typography>
            <Typography variant="span" component="p">25 Jan 2021</Typography>
        </Box>
        <Typography variant="span" component="p">Shopping</Typography>
        <Typography variant="span" component="p">Pending</Typography>
        <Typography variant="span" component="p" color="#FE5C73">-$150</Typography>
        </Box>
        <Box component="div" sx={{display: "flex", alignItems: "center", justifyContent: "space-between", my: 2}}>
            <Box component="div" sx={{backgroundColor: "#E7EDFF", width: 55, height: 55, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <ConstructionIcon sx={{color: "#396AFF", fontSize: 30}} />
            </Box>
            <Box component="div">
            <Typography variant="span" component="p" color="#343C6A">Mobile Service</Typography>
            <Typography variant="span" component="p">25 Jan 2021</Typography>
        </Box>
        <Typography variant="span" component="p">Service</Typography>
        <Typography variant="span" component="p">Completed</Typography>
        <Typography variant="span" component="p" color="#FE5C73">-$340</Typography>
        </Box>
        <Box component="div" sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Box component="div" sx={{backgroundColor: "#FFE0EB", width: 55, height: 55, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <PersonIcon sx={{color: "#FF82AC", fontSize: 30}} />
            </Box>
            <Box component="div">
            <Typography variant="span" component="p" color="#343C6A">Emilly Wilson</Typography>
            <Typography variant="span" component="p">25 Jan 2021</Typography>
        </Box>
        <Typography variant="span" component="p">Transfer</Typography>
        <Typography variant="span" component="p">Completed</Typography>
        <Typography variant="span" component="p" color="#16DBAA">+$340</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LastTransactions;
