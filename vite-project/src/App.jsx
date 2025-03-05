import { useState } from 'react'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourites'
import Navbar from './components/navbar'
import { MovieProvider } from './contexts/MovieContext'


function App() {
  

  return (
  
   <MovieProvider>
    <Navbar/>
    <div className="main-content">
    <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/favourites" element = {<Favourite/>}/>
    </Routes>
   </div>
   </MovieProvider>

  )
}

export default App
