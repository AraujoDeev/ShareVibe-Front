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
  CommentsContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 30px',
  },
  TopContainer: {
    display: 'flex',
  },
  ImageComments: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    marginRight: '8px',
  },
  Comments: {
    backgroundColor: '#F0F2F5',
    borderRadius: '12px',
    marginLeft: '2px',
    padding: '4px 18px',
  },
  BoxComment: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  BoxInputComment: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '5px 8px',
    borderRadius: '40px',
    backgroundColor: '#F0F2F5',
  },
  Form: {
    width: '100%',
    display: 'flex',
  },
  InputComment: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    width: '100%',
  },
  IconSendMessage: {
    fontSize: '24px',
    cursor: 'pointer',
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
    background-color: #f1f2f6;
  }
`

export const ReactionsComments = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  color: #999b9d;
`
