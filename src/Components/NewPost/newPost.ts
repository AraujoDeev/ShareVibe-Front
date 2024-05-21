import styled from 'styled-components'

export const classes = {
  Container: {
    display: 'flex  ',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '8px 8px',
  },
  TopContainer: {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '8px 0',
  },
  ImageContainer: {
    display: 'flex',
    marginRight: '20px',
    alignItems: 'center',
  },
  Image: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  TextContainer: {
    width: '85%',
  },
  ButtonNewPost: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '8px 12px',
    color: 'grey',
    border: 'none',
    borderRadius: '16px',
    backgroundColor: '#F1F2F6',
  },
  Line: {
    width: '98%',
    borderTop: 'red',
  },
  ContainerActions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  IconLive: {
    color: '#F04063',
    marginRight: '10px',
  },
  IconPhoto: {
    color: '#4BC063',
    marginRight: '10px',
  },
  IconActivity: {
    color: '#E8AD3E',
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
    background-color: #f1f2f6;
  }
`
