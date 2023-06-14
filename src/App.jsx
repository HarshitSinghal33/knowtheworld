import React,{ useState } from 'react'
import { BrowserRouter} from "react-router-dom"
import { AnimateRoute } from '../public/AnimateRoute/AnimteRoute'
import { InputData } from '../public/ContextandApi/InputData'
import { Header } from '../public/header/MainHeader'
function App() {
  const [search, setSearch] = useState('')
  const [continents, setContinents] = useState('All');
  const [mode,setMode] = useState("light")
  return (
    <>
    <InputData.Provider value={{search,setSearch,continents,setContinents,mode,setMode}}>
      <BrowserRouter>
        <Header/>
        <AnimateRoute/>
      </BrowserRouter>
      </InputData.Provider>
    </>
  )
}

export default App
