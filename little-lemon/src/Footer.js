import { Link } from 'react-router-dom';

function Footer() {
          return (
    <>
      <div class="flexH background-primary-green">
        <footer>
          <div class="fishflex">
            <img src="./images/fish.png" alt="Liitle Lemon Logo" class="fish"></img>
          </div>
          <ul class="navigation paragraphText">
          <li class="sectionTitle primary-white"><h2>Doormat Navigation</h2></li>
          <li><Link to="/" class="primary-white">Home</Link></li>
          <li><Link to="/" class="primary-white">About</Link></li>
          <li><Link to="/" class="primary-white">Menu</Link></li>
          <li><Link to="/booking" class="primary-white">Reservations</Link></li>
          <li><Link to="/" class="primary-white">Order Online</Link></li>
          <li><Link to="/" class="primary-white">Login</Link></li>
          </ul>
          <ul class="contact paragraphText primary-white">
          <li class="sectionTitle padding primary-white"><h2>Contact</h2></li>
          <li><>Address</></li>
          <li><>Phone Number</></li>
          <li><>Email</></li>
          </ul>
           <ul class="social paragraphText primary-white">
          <li class="sectionTitle"><h2>Social Media Links</h2></li>
          <li><><a href="http://www.renderedworlds.com" class="primary-white">Instagram</a></></li>
          <li><><a href="http://www.renderedworlds.com" class="primary-white">Facebook</a></></li>
          <li><><a href="http://www.renderedworlds.com" class="primary-white">X (Twitter)</a></></li>
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