import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

function AddCard() {
  return (
    <Box component="div">
          <Typography variant="span" component="p" mb={1} fontSize={20}>Add New Card</Typography>
          <Box component="form" sx={{backgroundColor: "#fff", p: 4, borderRadius: 8, width: 800}}>
            <Typography variant="p" component="p" color="#718EBF">Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</Typography>
            <Box component="div" sx={{mt:3, display: "flex", justifyContent: "space-between"}}>
            <TextField sx={{width: 210}} label="Card Type" variant="outlined" />
            <TextField sx={{width: 210}} label="Name On Card" variant="outlined" />
            </Box>
            <Box component="div" sx={{mt:3, display: "flex", justifyContent: "space-between"}}>
            <TextField sx={{width: 210}} label="Card Number" type="password" variant="outlined" />
            <TextField sx={{width: 210}} label="Expiration Date" type="date" variant="outlined" />
            </Box>
            <Button variant="contained" sx={{mt: 3}}>Add Card</Button>
          </Box>
        </Box>
  )
}

export default AddCard