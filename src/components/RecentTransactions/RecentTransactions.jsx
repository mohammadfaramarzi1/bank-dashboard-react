import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Tab,
  TablePagination,
  Tabs,
  TextField,
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
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTransaction,
  getTransactionsInfosFromServer,
} from "../../Redux/Store/transactions";
import { toast } from "sonner";

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

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

function createData(desc, Tid, type, date, amount) {
  return { desc, Tid, type, date, amount };
}

function RecentTransactions() {
  const [value, setValue] = useState(0);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [addTransactionForm, setAddTransactionForm] = useState({
    desc: "",
    type: "",
    amount: "",
  });

  const transactions = useSelector((state) => state.transactions[0]?.all);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const addTransactionFormChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    setAddTransactionForm((form) => ({ ...form, [name]: value }));
  };

  const addTransactionFormClickHandler = async () => {
    if (
      !addTransactionForm.amount ||
      !addTransactionForm.desc ||
      !addTransactionForm.type
    ) {
      toast.error("Please Enter Valid Characters");
      return;
    }
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const hour = date.getHours();
    const newTransaction = {
      Tid: Math.floor(Math.random() * 10000000),
      desc: addTransactionForm.desc,
      type: addTransactionForm.type,
      amount: addTransactionForm.amount,
      status: "Pending",
      date: `${day} ${month}, ${hour}:00`,
    };
    // const newTransaction = {
    //   id: Math.floor(Math.random() * 10000000),
    //   desc: "Test Transaction",
    //   type: "expense",
    //   amount: 100,
    //   status: "Pending",
    //   date: new Date().toISOString(),
    // };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => console.log("✅ Transaction added:", data))
      .catch((error) => console.error("❌ Error:", error));
    // try {
    //   const res = await fetch("http://localhost:3000/transactions", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newTransaction),
    //   });
    //   if (!res.ok) {
    //     // متن خطای سرور را فقط یک‌بار بخوانید
    //     const errorText = await res.text();
    //     throw new Error(`خطا در ارسال تراکنش: ${res.status} - ${errorText}`);
    //   }
    //   const savedTransaction = await res.json();
    //   dispatch(addNewTransaction(savedTransaction));
    //   toast.success("Added Successfully");
    //   setOpen(false);
    // } catch (err) {
    //   console.error("🚨 خطا در ارسال تراکنش:", err);
    //   toast.error("An Error Occured");
    // }
  };

  useEffect(() => {
    dispatch(getTransactionsInfosFromServer());
    transactions?.forEach((transaction) => {
      setRows((rows) => [
        ...rows,
        createData(
          transaction.desc,
          transaction.Tid,
          transaction.type,
          transaction.date,
          transaction.amount
        ),
      ]);
    });
    console.log("مقدار transactions تغییر کرد:", transactions);
  }, [transactions]);

  // console.log(rows, transactions);

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
          onClick={handleOpen}
        >
          +Add Transaction
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              bgcolor: "background.paper",
              border: "2px solid #343C6A",
              boxShadow: 24,
              p: 4,
              borderRadius: 7,
            }}
          >
            <Typography variant="h6" component="h2">
              Add New Transaction
            </Typography>
            <Box component="form" mt={3}>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <TextField
                  variant="outlined"
                  value={addTransactionForm.desc}
                  name="desc"
                  onChange={(event) => addTransactionFormChangeHandler(event)}
                  label="Description"
                />
                <TextField
                  variant="outlined"
                  value={addTransactionForm.type}
                  name="type"
                  onChange={(event) => addTransactionFormChangeHandler(event)}
                  label="Type"
                />
              </Box>
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-evenly", my: 3 }}
              >
                <TextField
                  variant="outlined"
                  value={addTransactionForm.amount}
                  name="amount"
                  onChange={(event) => addTransactionFormChangeHandler(event)}
                  label="Amount"
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={addTransactionFormClickHandler}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
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
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell
                        align="center"
                        sx={
                          row.amount.startsWith("+")
                            ? { color: "#41D4A8" }
                            : { color: "#FF4B4A" }
                        }
                      >
                        {row.amount}
                      </TableCell>
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
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .sort((a, b) => b.Tid - a.Tid)
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
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell
                        align="center"
                        sx={
                          row.amount.startsWith("+")
                            ? { color: "#41D4A8" }
                            : { color: "#FF4B4A" }
                        }
                      >
                        {row.amount}
                      </TableCell>
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
