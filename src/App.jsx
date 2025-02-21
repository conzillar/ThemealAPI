import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Menu from './Page/Menu'
import Home from './Page/Home'
import Gallery from './Page/Gallery'


function App() {

  return (
    < BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path= '/Gallery' element={<Gallery/>} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
