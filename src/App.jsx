import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs';
import Academic from './pages/Academic';
import Contact from './pages/Contact';

function App() {
 
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/academic" element={<Academic/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
