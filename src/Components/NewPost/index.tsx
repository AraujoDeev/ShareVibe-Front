import { Box, Button, Typography } from '@mui/material'

import VideoCallIcon from '@mui/icons-material/VideoCall'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import TagFacesIcon from '@mui/icons-material/TagFaces'

import Profile from '../../assets/Perfil.jpg'
import { Actions, classes } from './newPost'

const NewPost = () => {
  return (
    <Box sx={classes.Container}>
      <Box sx={classes.TopContainer}>
        <Box sx={classes.ImageContainer}>
          <img style={classes.Image} src={Profile} alt="Profile" />
        </Box>
        <Box sx={classes.TextContainer}>
          <Button sx={classes.ButtonNewPost}>
            What&#39;s on your mind, Mathew?
          </Button>
          {/* <input
            type="text"
            style={classes.Input}
            placeholder="What&#39;s on your mind, Mathew?"
          /> */}
        </Box>
      </Box>
      <hr style={classes.Line} />

      <Box sx={classes.ContainerActions}>
        <Actions>
          <VideoCallIcon sx={classes.IconLive} />
          <Typography variant="subtitle1">Live</Typography>
        </Actions>

        <Actions>
          <AddPhotoAlternateIcon sx={classes.IconPhoto} />
          <Typography variant="subtitle1">Photo/Video</Typography>
        </Actions>

        <Actions>
          <TagFacesIcon sx={classes.IconActivity} />
          <Typography variant="subtitle1">Feeling/Activity</Typography>
        </Actions>
      </Box>
    </Box>
  )
}

export default NewPost

// https://store-images.s-microsoft.com/image/apps.16054.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.07640ca7-c177-4ef3-8d87-b4b06865f65b?h=576
