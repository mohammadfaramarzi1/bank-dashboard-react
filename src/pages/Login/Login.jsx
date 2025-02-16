import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/user";

function Login() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setForm((form) => ({ ...form, [name]: value }));
  };

  const clickHandler = (event) => {
    event.preventDefault();
    if (
      form.name.length < 3 ||
      form.username.length < 3 ||
      form.email.length < 5 ||
      form.password.length < 8
    ) {
      toast.error("Please Enter Valid Characters");
      return;
    }
    setUser(form);
    navigate("/");
    toast.success("Logged in Successfully");
  };

  return (
    <Box component="div" sx={{ display: "flex", p: 2 }}>
      <img src="/6343845.jpg" alt="" style={{ width: "50%", height: 600 }} />
      <Box
        component="form"
        sx={{
          border: 1,
          borderColor: "#343C6A",
          width: "100%",
          borderRadius: 15,
          height: 600,
        }}
      >
        <Typography
          variant="span"
          component="p"
          sx={{
            textAlign: "center",
            mt: 5,
            fontSize: 30,
            fontFamily: "Roboto SemiBold",
          }}
        >
          Login
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            alignItems: "center",
            mt: 5,
          }}
        >
          <TextField
            variant="outlined"
            name="name"
            onChange={(event) => changeHandler(event)}
            label="Name"
            sx={{ width: "400px" }}
            defaultValue={form.name}
          />
          <TextField
            name="username"
            onChange={(event) => changeHandler(event)}
            defaultValue={form.username}
            variant="outlined"
            label="Username"
            sx={{ width: "400px" }}
          />
          <TextField
            variant="outlined"
            label="Email"
            sx={{ width: "400px" }}
            name="email"
            onChange={(event) => changeHandler(event)}
            defaultValue={form.email}
          />
          <TextField
            variant="outlined"
            type="password"
            label="Password"
            sx={{ width: "400px" }}
            name="password"
            onChange={(event) => changeHandler(event)}
            defaultValue={form.password}
          />
          <Button variant="contained" onClick={() => clickHandler(event)}>
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
