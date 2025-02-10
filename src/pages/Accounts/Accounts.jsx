import React from 'react'
import { Box } from '@mui/material'
import AccountBadge from '../../components/AccountBadge/AccountBadge'

function Accounts() {
  return (
    <Box component="div" sx={{mr: 2}}>
      <AccountBadge />
    </Box>
  )
}

export default Accounts