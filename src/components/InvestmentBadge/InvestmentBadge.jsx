import React from "react";
import { Box, Typography } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PieChartIcon from '@mui/icons-material/PieChart';
import RepeatIcon from '@mui/icons-material/Repeat';

function InvestmentBadge() {
  return (
    <Box component="div" sx={{display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "center"}}>
      <Box component="div" sx={{backgroundColor: "#fff", width: 350, p: 2, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 7, columnGap: 2}}>
        <Box component="div" sx={{width: 70, height: 70, borderRadius: "100%", backgroundColor: "#DCFAF8", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <ShoppingBagIcon sx={{color: "#16DBCC", fontSize: 30}} />
        </Box>
        <Box component="div">
            <Typography variant="span" component="p" mb={1} color="#718EBF">Total Invested Amount</Typography>
            <Typography variant="span" component="p">$150,000</Typography>
        </Box>
      </Box>
      <Box component="div" sx={{backgroundColor: "#fff", width: 350, p: 2, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 7, columnGap: 2}}>
        <Box component="div" sx={{width: 70, height: 70, borderRadius: "100%", backgroundColor: "#FFE0EB", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <PieChartIcon sx={{color: "#FF82AC", fontSize: 30}} />
        </Box>
        <Box component="div">
            <Typography variant="span" component="p" mb={1} color="#718EBF">Number of Investments</Typography>
            <Typography variant="span" component="p">1,250</Typography>
        </Box>
      </Box>
      <Box component="div" sx={{backgroundColor: "#fff", width: 350, p: 2, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 7, columnGap: 2}}>
        <Box component="div" sx={{width: 70, height: 70, borderRadius: "100%", backgroundColor: "#E7EDFF", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <RepeatIcon sx={{color: "#396AFF", fontSize: 30}} />
        </Box>
        <Box component="div">
            <Typography variant="span" component="p" mb={1} color="#718EBF">Rate of Return</Typography>
            <Typography variant="span" component="p">+5.80%</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default InvestmentBadge;
