import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Facts from './pages/Facts'
import Countdown from './pages/Countdown'
import Gift from './pages/Gift-ideas'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/birthday-facts" element={<Facts/>}/>
          <Route path="/countdown" element={<Countdown/>}/>
          <Route path="/gift-ideas" element={<Gift/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
