import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Men from './pages/Men'
import OrderComplete from './pages/OrderComplete'

function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/error404' element={<Error/>}></Route>
        <Route path='/products' element={<ProductView collection="SUMMER COLLECTION"/>}></Route>
        <Route path='/mens' element={<Men/>}></Route>
        <Route path='/order/success' element={<OrderComplete/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
