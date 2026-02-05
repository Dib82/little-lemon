import { Routes, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav class="parent">
          <ul className="sectionTitle">
            <li><img src="./images/logo_s.jpg" alt="Liitle Lemon Logo"  id="logo_s"></img></li>
            <li class="sectionTitle"><Link to="/" class="primary-green">Home</Link></li>
            <li><Link to="#" class="primary-green">About</Link></li>
            <li><Link to="#" class="primary-green">Menu</Link></li>
            <li><Link to="/booking" class="primary-green">Reservations</Link></li>
            <li><Link to="#" class="primary-green">Order Online</Link></li>
            <li><Link to="#" class="primary-green">Login</Link></li>
          </ul>
      </nav>
   </>
  );
}

export default Nav;