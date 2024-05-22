import { Box, Link, Typography } from '@mui/material'
import { Actions, classes } from './post'

import Profile from '../../assets/Perfil.jpg'
import PhotoPost from '../../assets/post.jpg'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CloseIcon from '@mui/icons-material/Close'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { PiShareFatLight } from 'react-icons/pi'

const Post = () => {
  return (
    <Box sx={classes.Container}>
      {/* post header */}
      <Box sx={classes.PostHeader}>
        <Box sx={classes.PostHeaderLeft}>
          <img style={classes.ImagePost} src={Profile} alt="" />
          <Box sx={classes.PagePost}>
            <Link variant="body1" sx={classes.PostTitle}>
              Os Perigos do Webnamoro
            </Link>
            <Typography sx={classes.DatePost} variant="subtitle2">
              5 d
            </Typography>
          </Box>
        </Box>

        <Box>
          <MoreHorizIcon />
          <CloseIcon />
        </Box>
      </Box>

      {/* description */}
      <Box sx={classes.PostDescription}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet. Est ducimus architecto ut placeat tenetur
          et consequatur adipisci ut vitae iste sed ipsam porro est numquam
          nesciunt ut accusamus alias. Et alias quaerat qui laudantium quia qui
          enim error aut autem nemo ad quia culpa.
        </Typography>
      </Box>

      {/* post */}
      <Box sx={classes.PostContent}>
        <img style={classes.Post} src={PhotoPost} alt="Post" />
      </Box>

      {/* numbers reactions */}
      <Box sx={classes.ReactionsContainer}>
        <Box sx={classes.Reactions}>
          <Box sx={classes.Likes}>
            <ThumbUpIcon sx={classes.LikeIcon} />
          </Box>
          <Box>
            <Typography variant="subtitle1">
              James Smith, Linda Miller e others 58 people
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography>10 comments</Typography>
        </Box>
      </Box>
      <Box sx={classes.Line}>
        <hr style={classes.hr} />
      </Box>

      {/* reactions */}
      <Box sx={classes.ActionsContainer}>
        <Actions>
          <AiOutlineLike style={classes.IconLike} />
          <Typography>Like</Typography>
        </Actions>

        <Actions>
          <FaRegComment style={classes.IconComment} />
          <Typography>Comment</Typography>
        </Actions>

        <Actions>
          <PiShareFatLight style={classes.IconShare} />
          <Typography>Share</Typography>
        </Actions>
      </Box>

      <Box sx={classes.Line}>
        <hr style={classes.hr} />
      </Box>

      {/* coments */}
      <Box>
        <Typography>alisiadsjfkdbgfldnvkBv</Typography>
      </Box>
    </Box>
  )
}

export default Post
