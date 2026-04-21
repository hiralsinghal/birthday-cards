import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DayFacts from './pages/Day'
import Countdown from './pages/Countdown'
import Gift from './pages/Gift-ideas'
import './App.css'

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {
  const { innerWidth, innerHeight } = useWindowSize()
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        {/*<Confetti width={innerWidth} height={innerHeight}></Confetti>*/}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/birthday-facts" element={<DayFacts/>}/>
          <Route path="/countdown" element={<Countdown/>}/>
          <Route path="/gift-ideas" element={<Gift/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
