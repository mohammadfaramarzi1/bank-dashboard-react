import React from "react";
import { Avatar, Box, Button, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function Setting() {
  return (
    <Box mr={2} component="div" sx={{display: "flex", justifyContent: "space-evenly", height: "575px"}}>
      <Box component="div" sx={{ position: "relative" }}>
        <Avatar
          alt="user"
          src="/users/Mask Group-min.png"
          sx={{ width: 100, height: 100 }}
        />
        <IconButton>
          <EditIcon
            sx={{
              width: 30,
              height: 30,
              backgroundColor: "#1814F3",
              borderRadius: "100%",
              color: "#fff",
              position: "absolute",
              bottom: 15,
            }}
          />
        </IconButton>
      </Box>
      <Box component="form" height="100%">
        <Box component="div">
        <TextField label="Name" variant="outlined" sx={{backgroundColor: "#fff"}} />
        <TextField label="Username" variant="outlined" sx={{ml: 5, backgroundColor: "#fff"}}   />
        </Box>
        <Box component="div" my={5}>
        <TextField label="Email" variant="outlined" sx={{backgroundColor: "#fff"}} />
        <TextField label="Password" type="password" variant="outlined" sx={{ml: 5, backgroundColor: "#fff"}}   />
        </Box>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
}

export default Setting;
