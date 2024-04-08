import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
