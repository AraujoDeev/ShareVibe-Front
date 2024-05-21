import styled from 'styled-components'

export const classes = {
  Container: {
    width: '100%',
    height: '60px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  Logo: {
    width: '20%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  IconLogo: {
    color: '#0866ff',
    fontSize: '40px',
  },
  InputSearch: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    width: '250px',
    position: 'absolute',
    left: '70px',
    padding: '0 10px',
    backgroundColor: '#f0f2f5',
  },
  IconSearch: {
    position: 'relative',
  },
  Menu: {
    display: 'flex',
    alignItems: 'center',
    width: '35%',
    height: '48px',
  },
  Profile: {
    width: '20%',
  },
  Icons: {
    fontSize: '24px',
  },
}

export const TextField = styled.input`
  border: none;
  height: 38px;
  width: 200px;
  position: relative;
  right: 0;
  outline: none;
  font-size: 14px;
  background-color: transparent;
  padding: 0 0 0 8px;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ItemsList = styled.li`
  cursor: pointer;
  list-style: none;
  border-radius: 8px;
  width: calc(100% / 5.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  color: gray;
  &:hover {
    background-color: #a9aaac65;
  }
`

export const ListProfile = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 48px;
`

export const ItemsListProfile = styled.li`
  cursor: pointer;
  border: 1px solid;
  list-style: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  margin-left: 10px;
  color: gray;
  &:hover {
    background-color: #a9aaac65;
  }
`
