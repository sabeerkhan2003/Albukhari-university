import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs';

function App() {
 
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
