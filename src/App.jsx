import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { AnimateRoute } from '../public/AnimateRoute/AnimteRoute'
import { Header } from '../public/header/MainHeader'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimateRoute />
      </BrowserRouter >
    </>
  )
}

export default App
