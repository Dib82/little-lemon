
import { Link } from "react-router-dom";

function Main() {
  return (
        <>
        <div class="flexH">
          <main class="header">
            <div class="nest">
              <h1 class="displayTitle secondary-yellow">Little Lemon</h1>
              <p class="subTitle">Chicago</p>
              <p class="leadText">Little Lemon is a charming neighbourhood bistro
              that serves simple food and classic cocktails in a lively but casual environment.
              The restaurant features a locally-sourced menu with daily specials</p>
              <div class="flex">
                <Link to="/booking">
                <button class="leadtext primary-green">Reservations</button>
                </Link>
              </div>
              </div>
              <div class="myimg flexH">
                <img src="./images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg"></img>
            </div>
          </main>
        </div>
        </>
  );
}

export default Main;