import { useState } from 'react'
import TopNav from './components/TopNav'
import './App.css'
import Featured from './components/Featured'
import TopPicks from './components/TopPicks'
import Meal from './components/Meal'
import Footer from './components/Footer'
import GetApp from './components/GetApp'
import BaseFooter from './components/BaseFooter'

function App() {
  
  return (
  
    <div>
      <TopNav/>
      <Featured/>
      <GetApp/>
      <TopPicks/>
      <Meal/>
      <Footer/> 
      <BaseFooter/>
    </div>

  )
}

export default App
