import React from "react";
import { Box, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

function InvoicesInfo() {
  return (
    <Box component="div" width="100%" >
      <Typography variant="span" component="p" mb={1}>
        Invoices Sent
      </Typography>

      <Box
        component="div"
        sx={{
          backgroundColor: "#fff",
          p: 2,
          borderRadius: 6,
          height: 400, 
          display: "flex",
          flexDirection: "column", 
          justifyContent: "space-between"
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#718EBF",
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
          >
            <Box
              component="div"
              sx={{
                backgroundColor: "#DCFAF8",
                width: 60,
                height: 60,
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppleIcon sx={{ color: "#16DBCC", fontSize: 30 }} />
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" color="#B1B1B1">
                Apple Store
              </Typography>
              <Typography variant="span" component="p">
                5h ago
              </Typography>
            </Box>
          </Box>
          <Typography variant="span" component="p">
            $140
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#718EBF",
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
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
              <PersonIcon sx={{ color: "#FFBB38", fontSize: 30 }} />
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" color="#B1B1B1">
                Michael
              </Typography>
              <Typography variant="span" component="p">
                2 days ago
              </Typography>
            </Box>
          </Box>
          <Typography variant="span" component="p">
            $160
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#718EBF",
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
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
              <SportsEsportsIcon sx={{ color: "#396AFF", fontSize: 30 }} />
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" color="#B1B1B1">
                Playstation
              </Typography>
              <Typography variant="span" component="p">
                5 days ago
              </Typography>
            </Box>
          </Box>
          <Typography variant="span" component="p">
            $1085
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#718EBF",
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
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
              <PersonIcon sx={{ color: "#FF82AC", fontSize: 30 }} />
            </Box>
            <Box component="div">
              <Typography variant="span" component="p" color="#B1B1B1">
                William
              </Typography>
              <Typography variant="span" component="p">
                15 days ago
              </Typography>
            </Box>
          </Box>
          <Typography variant="span" component="p">
            $90
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default InvoicesInfo;
