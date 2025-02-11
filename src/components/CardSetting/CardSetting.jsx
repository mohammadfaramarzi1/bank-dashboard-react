import React from "react";
import { Box, Typography } from "@mui/material";
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

function CardSetting() {
  return (
    <Box component="div" width="100%">
      <Typography variant="span" component="p" mb={1} fontSize={20}>
        Card Setting
      </Typography>
      <Box component="div" sx={{ backgroundColor: "#fff", borderRadius: 5, p: 4, width: "100%",height:343, display: "flex", flexDirection: "column", rowGap: 2 }} >
        <Box component="div" sx={{display: "flex", alignItems: "center", columnGap: 2}}>
          <Box component="div" sx={{backgroundColor: "#FFF5D9", width: 60, height: 60, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <CreditCardOffIcon sx={{color: "#FFBB38", fontSize: 30}} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>Block Card</Typography>
            <Typography variant="span" component="p" color="#718EBF">Instantly block your card</Typography>
          </Box>
        </Box>
        <Box component="div" sx={{display: "flex", alignItems: "center", columnGap: 2}}>
          <Box component="div" sx={{backgroundColor: "#E7EDFF", width: 60, height: 60, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <LockIcon sx={{color: "#396AFF", fontSize: 30}} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>Change Pin Code</Typography>
            <Typography variant="span" component="p" color="#718EBF">Choose another pin code</Typography>
          </Box>
        </Box>
        <Box component="div" sx={{display: "flex", alignItems: "center", columnGap: 2}}>
          <Box component="div" sx={{backgroundColor: "#FFE0EB", width: 60, height: 60, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <GoogleIcon sx={{color: "#FF82AC", fontSize: 30}} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>Add to Google Pay</Typography>
            <Typography variant="span" component="p" color="#718EBF">Withdraw without any card</Typography>
          </Box>
        </Box>
        <Box component="div" sx={{display: "flex", alignItems: "center", columnGap: 2}}>
          <Box component="div" sx={{backgroundColor: "#DCFAF8", width: 60, height: 60, borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <AppleIcon sx={{color: "#16DBCC", fontSize: 30}} />
          </Box>
          <Box component="div">
            <Typography variant="span" component="p" mb={1}>Add to Apple Pay</Typography>
            <Typography variant="span" component="p" color="#718EBF">Withdraw without any card</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardSetting;
