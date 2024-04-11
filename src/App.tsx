import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import { NavBar } from './layout/MaterialNav';
import Preloader from './Preloader';
import { useState, useEffect } from 'react';
import ScrollToHashElement from './ScrollToHash';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return <Preloader/>
  }
  return (
    <div className="w-full ">
      <BrowserRouter>
        <NavBar/>
        <ScrollToTop />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Nopage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
