// import logo from './logo.svg';

import './App.css';
import Nav from './Nav.js';
import Main from './Main.js';
// import Section from './Section.js';
import Footer from'./Footer.js';
import Specials from './Specials.js'
import Testimonials from './Testimonials.js';
import About from './About.js';
import SpecialCard from './SpecialCard.js'
import Booking from './Booking.js';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage.js';


// import Header from './Header.js';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
