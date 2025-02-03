import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs';
import Academic from './pages/Academic';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Ejournal from './pages/E-Journal';
import Faculties from './pages/Faculties';

function App() {
 
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/academic" element={<Academic/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/journal" element={<Ejournal/>} />
        <Route path="/faculty" element={<Faculties/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
