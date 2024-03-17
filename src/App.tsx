import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import { NavBar } from './layout/MaterialNav';
function App() {

  return (
    <div className="w-full">
      <BrowserRouter>
        <NavBar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Nopage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
