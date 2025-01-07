import React, { useState } from 'react'
import { Container, Form, LoginContainer } from './login'
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email'
import Axios from 'axios'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleClickRegister = () => {
    Axios.post('http://localhost:8000/register', {
      email: form.email,
      password: form.password,
    })
      .then((response) => {
        console.log(response.data)
        setForm({ email: '', password: '' }) // Limpa os campos
      })
      .catch((error) => {
        console.error('Erro ao registrar:', error)
      })
  }

  const handleClickLogin = () => {
    Axios.post('http://localhost:8000/login', {
      email: form.email,
      password: form.password,
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Erro ao realizar login:', error)
      })
    setForm({ email: '', password: '' }) // Limpa os campos
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <Container>
      <LoginContainer>
        <Typography fontSize={'1.5rem'}>Seja Bem-Vindo!!!</Typography>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
              type="email"
              required={true}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              name="email"
              value={form.email}
              id="standard-adornment-email"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              required={true}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              name="password"
              placeholder="Password"
              value={form.password}
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'Esconder a senha' : 'Mostrar a senha'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button onClick={handleClickLogin} variant="contained" type="button">
            Acessar
          </Button>
        </Form>
        <Typography>
          Ainda não possui conta?{' '}
          <strong>
            <a href="#" aria-label="Cadastrar nova conta">
              Cadastre aqui
            </a>
          </strong>
          !
        </Typography>
      </LoginContainer>
    </Container>
  )
}

export default Login
