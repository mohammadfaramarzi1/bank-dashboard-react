import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { getUser, setUser } from "../../utils/user";
import { toast } from "sonner";

function Setting() {
  const user = useSelector((state) => state.user[0]);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setForm(() => getUser());
  }, []);

  console.log(form);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickHandler = () => {
    setUser(form);
    toast.success("Updated Successfully")
  }

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
      <Box
        component="form"
        width={700}
        height={400}
        sx={{
          border: 1,
          borderRadius: 15,
          px: 3,
          py: 5,
          borderColor: "#343C6A",
        }}
      >
        <Typography
          variant="span"
          component="p"
          sx={{
            fontFamily: "Roboto SemiBold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          USer Info
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            alignItems: "center",
            mt: 5,
            justifyContent: "center",
            mx: "auto",
          }}
        >
          <Box component="div" sx={{ display: "flex", columnGap: 2 }}>
            <TextField
              name="name"
              value={form.name}
              onChange={(event) => changeHandler(event)}
              label="Name"
              variant="outlined"
              sx={{ backgroundColor: "#fff", width: 300 }}
            />
            <TextField
              name="username"
              value={form.username}
              onChange={(event) => changeHandler(event)}
              label="Username"
              variant="outlined"
              sx={{ ml: 5, backgroundColor: "#fff", width: 300 }}
            />
          </Box>
          <Box component="div" sx={{ display: "flex", columnGap: 2 }}>
            <TextField
              name="email"
              value={form.email}
              onChange={(event) => changeHandler(event)}
              label="Email"
              variant="outlined"
              sx={{ backgroundColor: "#fff", width: 300 }}
            />
            <TextField
              name="password"
              value={form.password}
              onChange={(event) => changeHandler(event)}
              label="Password"
              type="password"
              variant="outlined"
              sx={{ ml: 5, backgroundColor: "#fff", width: 300 }}
            />
          </Box>
          <Button variant="contained" onClick={clickHandler}>
            Change
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Setting;
