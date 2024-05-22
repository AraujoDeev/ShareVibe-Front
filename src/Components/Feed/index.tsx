import { Box } from '@mui/material'
import React from 'react'
import Stories from '../Stories'
import { classes } from './feed'
import NewPost from '../NewPost'
import Post from '../Post'

// import { Container } from './styles';

const Feed = () => {
  return (
    <Box sx={classes.Container}>
      <Stories />
      <NewPost />
      <Post />
    </Box>
  )
}

export default Feed
