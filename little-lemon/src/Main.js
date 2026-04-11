
import { Link } from "react-router-dom";

function Main() {

  return (
        <>
        <div className="flexH">
          <main className="header">
            <div className="nest">
              <h1 className="displayTitle secondary-yellow">Little Lemon</h1>
              <p className="subTitle">Chicago</p>
              <p className="leadText">Little Lemon is a charming neighbourhood bistro
              that serves simple food and classic cocktails in a lively but casual environment.
              The restaurant features a locally-sourced menu with daily specials</p>
              <div className="flex">
                <Link to="/booking">
                <button className="leadtext primary-green">Reservations</button>
                </Link>
              </div>
              </div>
              <div className="myimg flexH">
                <img src="./images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg"></img>
            </div>
          </main>
        </div>
        </>
  );
}

export default Main;