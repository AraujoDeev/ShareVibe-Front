import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import './global.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="teste">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
