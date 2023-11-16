import { useState } from 'react'
import TopNav from './components/TopNav'
import './App.css'
import Featured from './components/Featured'
import Delivery from './components/GetApp'
import TopPicks from './components/TopPicks'
import Meal from './components/Meal'
import Categories from './components/Categories'
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
      <Categories/>
      <Footer/> 
      <BaseFooter/>
    </div>

  )
}

export default App