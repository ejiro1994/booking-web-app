import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import GlobalFonts from './fonts/fonts'


import Home from './Home'
import Hotel from './Hotel'
import List from './List'




function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFonts />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
