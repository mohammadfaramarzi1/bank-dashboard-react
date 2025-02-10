import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Tab,
  TablePagination,
  Tabs,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(desc, Tid, type, card, date, amount) {
  return { desc, Tid, type, card, date, amount };
}

const rows = [
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
  createData(
    "Spotify Subscription",
    "#12548796",
    "Shopping",
    "1234 ****",
    "28 Jan, 12.30 AM",
    " -2,500"
  ),
];

function RecentTransactions() {
  const [value, setValue] = React.useState(0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component="div" mt={5}>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="span"
          component="span"
          fontSize={20}
          color="#343C6A"
        >
          Recent Transactions
        </Typography>
        <Button
          variant="outlined"
          sx={{ color: "#343C6A", borderColor: "#343C6A" }}
        >
          +Add Transaction
        </Button>
      </Box>
      <Box sx={{ width: "100%", mt: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Transactions" {...a11yProps(0)} />
            <Tab label="Income" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell align="center">Transaction ID</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Card</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.desc}
                      </TableCell>
                      <TableCell align="center">{row.Tid}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.card}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.amount}</TableCell>
                      <TableCell align="center">
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton color="warning">
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell align="center">Transaction ID</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Card</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.desc}
                    </TableCell>
                    <TableCell align="center">{row.Tid}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.card}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center">
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton color="warning">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default RecentTransactions;
