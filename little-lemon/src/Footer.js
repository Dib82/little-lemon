import { Link } from 'react-router-dom';

function Footer() {
          return (
    <>
      <div className="flexH background-primary-green">
        <footer>
          <div className="fishflex">
            <img src="./images/fish.png" alt="Liitle Lemon Logo" className="fish"></img>
          </div>
          <ul className="navigation paragraphText">
          <li className="sectionTitle primary-white"><h2>Doormat Navigation</h2></li>
          <li><Link to="/" className="primary-white">Home</Link></li>
          <li><Link to="/" className="primary-white">About</Link></li>
          <li><Link to="/" className="primary-white">Menu</Link></li>
          <li><Link to="/booking" className="primary-white">Reservations</Link></li>
          <li><Link to="/" className="primary-white">Order Online</Link></li>
          <li><Link to="/" className="primary-white">Login</Link></li>
          </ul>
          <ul className="contact paragraphText primary-white">
          <li className="sectionTitle padding primary-white"><h2>Contact</h2></li>
          <li><>Address</></li>
          <li><>Phone Number</></li>
          <li><>Email</></li>
          </ul>
           <ul className="social paragraphText primary-white">
          <li className="sectionTitle"><h2>Social Media Links</h2></li>
          <li><><a href="http://www.renderedworlds.com" className="primary-white">Instagram</a></></li>
          <li><><a href="http://www.renderedworlds.com" className="primary-white">Facebook</a></></li>
          <li><><a href="http://www.renderedworlds.com" className="primary-white">X (Twitter)</a></></li>
          </ul>
        </footer>
      </div>
   </>
  );
}
export default Footer;

      // <nav class="parent">
      //     <ul className="sectionTitle">
      //       <li><img src="./images/logo_s.jpg" alt="Liitle Lemon Logo"  id="logo_s"></img></li>
      //       <li class="sectionTitle primary-white"><Link to="/">Home</Link></li>
      //       <li><Link to="#" class="primary-green">About</Link></li>
      //       <li><Link to="#" class="primary-green">Menu</Link></li>
      //       <li><Link to="/booking" class="primary-green">Reservations</Link></li>
      //       <li><Link to="#" class="primary-green">Order Online</Link></li>
      //       <li><Link to="#" class="primary-green">Login</Link></li>
      //     </ul>
      // </nav>