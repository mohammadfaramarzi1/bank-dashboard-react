import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfosFromServer } from "../../Redux/Store/user";

function Setting() {
  const user = useSelector((state) => state.user[0]);
  const [form, setForm] = useState({
    name: "asas",
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <Box
      mr={2}
      component="div"
      sx={{ display: "flex", justifyContent: "space-evenly", height: "575px" }}
    >
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
          <TextField
            name="name"
            defaultValue={user?.name}
            onChange={(event) => changeHandler(event)}
            label="Name"
            variant="outlined"
            sx={{ backgroundColor: "#fff" }}
          />
          <TextField
            name="username"
            defaultValue={user?.username}
            onChange={(event) => changeHandler(event)}
            label="Username"
            variant="outlined"
            sx={{ ml: 5, backgroundColor: "#fff" }}
          />
        </Box>
        <Box component="div" my={5}>
          <TextField
            name="email"
            defaultValue={user?.email}
            onChange={(event) => changeHandler(event)}
            label="Email"
            variant="outlined"
            sx={{ backgroundColor: "#fff" }}
          />
          <TextField
            name="password"
            defaultValue={user?.password}
            onChange={(event) => changeHandler(event)}
            label="Password"
            type="password"
            variant="outlined"
            sx={{ ml: 5, backgroundColor: "#fff" }}
          />
        </Box>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>
  );
}

export default Setting;
