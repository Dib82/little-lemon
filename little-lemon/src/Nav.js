import { Routes, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav class="parent">
          <ul className="sectionTitle">
            <li><img src="./images/logo_s.jpg" alt="Liitle Lemon Logo"  id="logo_s"></img></li>
            <li className="sectionTitle"><Link to="/" className="primary-green">Home</Link></li>
            <li><Link to="#" className="primary-green">About</Link></li>
            <li><Link to="#" className="primary-green">Menu</Link></li>
            <li><Link to="/booking" className="primary-green">Reservations</Link></li>
            <li><Link to="#" className="primary-green">Order Online</Link></li>
            <li><Link to="#" className="primary-green">Login</Link></li>
          </ul>
      </nav>
   </>
  );
}

export default Nav;