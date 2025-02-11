import React from 'react'
import { Box } from '@mui/material'
import CardsInfo from '../../components/CardsInfo/CardsInfo'
import CardExpenseChart from '../../components/CardExpenseChart/CardExpenseChart'

function Cards() {
  return (
    <Box component="div" mr={2}>
      <CardsInfo isCardPage={true} />
      <Box component="div">
        <CardExpenseChart />
      </Box>
    </Box>
  )
}

export default Cards