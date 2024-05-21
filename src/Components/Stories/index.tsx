import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import Story_1 from '../../assets/story_1.png'
import Story_2 from '../../assets/story_2.png'
import Story_3 from '../../assets/story_3.png'
import Story_4 from '../../assets/story_4.png'
import Story_5 from '../../assets/story_5.png'
import Story_6 from '../../assets/story_6.png'
import Story_7 from '../../assets/story_7.png'
import Story_8 from '../../assets/story_8.png'
import Story_9 from '../../assets/story_9.png'
import Story_10 from '../../assets/story_10.png'
import { classes } from './stories'

const Stories = () => {
  return (
    <Box>
      <Box sx={classes.Container}>
        <List sx={classes.List}>
          <ListItem sx={classes.ListItem}>
            <img style={classes.Image} src={Story_1} alt="Story" />
            <Typography variant="subtitle1" sx={classes.Names}>
              Joseph
            </Typography>
          </ListItem>
          <ListItem sx={classes.ListItem}>
            <img style={classes.Image} src={Story_2} alt="Story" />
            <Typography variant="subtitle1" sx={classes.Names}>
              Clara
            </Typography>
          </ListItem>
          <ListItem sx={classes.ListItem}>
            <img style={classes.Image} src={Story_3} alt="Story" />
            <Typography variant="subtitle1" sx={classes.Names}>
              Mathew
            </Typography>
          </ListItem>
          <ListItem sx={classes.ListItem}>
            <img style={classes.Image} src={Story_4} alt="Story" />
            <Typography variant="subtitle1" sx={classes.Names}>
              Carl
            </Typography>
          </ListItem>
          <ListItem sx={classes.ListItem}>
            <img style={classes.Image} src={Story_5} alt="Story" />
            <Typography variant="subtitle1" sx={classes.Names}>
              Marks
            </Typography>
          </ListItem>
          <ListItem sx={classes.ListItem}>
            <img style={classes.Image} src={Story_6} alt="Story" />
            <Typography variant="subtitle1" sx={classes.Names}>
              Tony
            </Typography>
          </ListItem>
          {/* <li style={classes.ListItem}>
            <img style={classes.Image} src={Story_7} alt="Story" />
          </li>
          <li style={classes.ListItem}>
            <img style={classes.Image} src={Story_8} alt="Story" />
          </li>
          <li style={classes.ListItem}>
            <img style={classes.Image} src={Story_9} alt="Story" />
          </li>
          <li style={classes.ListItem}>
            <img style={classes.Image} src={Story_10} alt="Story" />
          </li> */}
        </List>
      </Box>
    </Box>
  )
}

export default Stories
