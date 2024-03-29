/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/Navbar/PriceLists/PriceList'
import Dashboard from './components/Navbar/Dashboard/Dashboard'
import PhoneBar from './components/Navbar/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>Hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
      
    </div>
  )
}

export default App
