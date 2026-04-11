

function About() {
  return (
        <>
        <about className="about">
          <div>
                <p className="displayTitle secondary-yellow">Little Lemon</p>
                <p className="subTitle primary-green">Chicago</p>
                <p className="leadText primary-green">Little Lemon is a charming neighbourhood bistro
                that serves simple food and classic cocktails in a lively but casual environment.
                The restaurant features a locally-sourced menu with daily specials</p>
            </div>
            <div className="about">
                <img src="./images/Luigi.png" id="Luigi" alt="mario"></img>
                <img src="./images/Mario.png" id="Mario" alt="Luigi"></img>
          </div>
        </about>
        </>
  );
}

export default About;