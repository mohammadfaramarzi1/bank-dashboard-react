import React from 'react'
import { Box } from '@mui/material'
import InvestmentBadge from '../../components/InvestmentBadge/InvestmentBadge'
import YearChart from '../../components/YearChart/YearChart'

function Investments() {
  return (
    <Box sx={{mr: 2}}>
      <InvestmentBadge />
      <Box component="div">
        <YearChart />
      </Box>
    </Box>
  )
}

export default Investments