import styled from 'styled-components'

export const classes = {
  Container: {
    marginTop: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
  },
  PostHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 28px',
  },
  PostHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  ImagePost: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  PagePost: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px',
  },
  PostTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  DatePost: {
    fontSize: '12px',
    color: '#9b9b9b',
  },
  PostDescription: {
    padding: '0 28px',
  },
  PostContent: {
    width: '100%',
    height: 'auto',
  },
  Post: {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
  },
  ReactionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 28px',
    alignItems: 'center',
    width: '100%',
  },
  Reactions: {
    display: 'flex',
    alignItems: 'center',
  },
  Likes: {
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#1576FD',
    color: 'white',
    marginRight: '10px',
  },
  LikeIcon: {
    width: '16px',
    height: '16px',
    fontSize: '10px',
  },
  Line: {
    width: '100%',
    height: '10px',
    padding: '0 30px',
  },
  hr: {
    width: '100%',
    borderColor: 'rgb(147 144 144 / 50%)',
    borderTop: 'none',
  },
  ActionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10px 0',
  },
  IconLike: {
    fontSize: '24px',
    marginRight: '10px',
  },
  IconComment: {
    fontSize: '20px',
    marginRight: '10px',
  },
  IconShare: {
    fontSize: '24px',
    marginRight: '10px',
  },
}

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 4px 0;
  width: 30%;

  cursor: pointer;
  &:hover {
    background-color: red;
  }
`
