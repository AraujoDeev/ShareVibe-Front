import { Box, Link, Typography } from '@mui/material'
import { Actions, ReactionsComments, classes } from './post'

import Profile from '../../assets/Perfil.jpg'
import Profile_2 from '../../assets/profile_2.jpg'
import PhotoPost from '../../assets/post.jpg'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CloseIcon from '@mui/icons-material/Close'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { PiShareFatLight } from 'react-icons/pi'
import { IoMdSend } from 'react-icons/io'

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
      <Box sx={classes.CommentsContainer}>
        <Box
          sx={classes.TopContainer}
          // className="container imagem, nome, comentario e reacao"
        >
          <Box className="imagem">
            <img style={classes.ImageComments} src={Profile_2} alt="Profile" />
          </Box>

          <Box>
            <Box sx={classes.Comments}>
              <Typography fontWeight={'bold'} variant="subtitle1">
                Jennifer Davis
              </Typography>
              <Typography variant="subtitle1">
                I think James Smith is a classic American name. It’s amazing how
                names like John Johnson and Mary Johnson have been popular for
                generations. The diversity in American surnames, from Brown to
                Miller to Wilson, really reflects the melting pot of cultures
                that the United States represents.
              </Typography>
            </Box>
            <ReactionsComments
            // classNmae="reacao"
            >
              <Typography fontSize={'13px'} variant="subtitle1">
                12 h
              </Typography>
              <Typography fontSize={'13px'} variant="subtitle1">
                Like
              </Typography>
              <Typography fontSize={'13px'} variant="subtitle1">
                Reply
              </Typography>
            </ReactionsComments>
          </Box>
        </Box>

        <Box sx={classes.BoxComment}>
          <img style={classes.ImageComments} src={Profile} alt="Profile" />
          <Box sx={classes.BoxInputComment}>
            <form style={classes.Form}>
              <input
                style={classes.InputComment}
                type="text"
                placeholder="Comment..."
              />
              <IoMdSend style={classes.IconSendMessage} />
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Post
