import React from 'react'
import Feed from '../Feed'
import { Box } from '@mui/material'
import { classes } from './main'
import Sidebar from '../Sidebar'
import Contacts from '../Contacts'

const Main = () => {
  return (
    <Box sx={classes.Container}>
      <Sidebar />
      <Feed />
      <Contacts />
    </Box>
  )
}

export default Main
