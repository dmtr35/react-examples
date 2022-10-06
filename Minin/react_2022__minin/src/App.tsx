import React from 'react'
import HomePage from './pages/HomePage'
import FavouritesPage from './pages/FavouritesPage'
import Navigation from './components/Navigation'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}


export default App