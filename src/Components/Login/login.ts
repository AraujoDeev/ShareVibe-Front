import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #096bea, #00a4ff);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  border: 1px solid;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px 40px;
  background-color: aliceblue;
`

export const Form = styled.form`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
  gap: 5px;
`
