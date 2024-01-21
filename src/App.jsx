import { useState,useEffect } from 'react'
import './App.css'
import { Header,Footer } from './components/index' 
import {Outlet} from 'react-router-dom'
import axios from 'axios'


function App() {
  
  return (
    <>
      <Header/>
        <div className='container'> {/* tHIS CONTAINER IS FROM app.css */}
          <Outlet />
        </div>
      <Footer/>
    </>
  )
}
export default App