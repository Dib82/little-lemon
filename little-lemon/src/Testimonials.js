function Testimonials(){
    return (
        <section class="testimonials" aria-labelledby="testimonials-title">
            <h2 id="testimonials-title">Testimonials</h2>
            <ul className="flexH">
                <li class="testimonialCard">
                    <article className="cardFormating">
                        <div role="img" aria-label="5 out of 5 stars">
                            <span aria-hidden="true">⭐ ⭐ ⭐ ⭐ ⭐</span>
                        </div>
                        <div className="imageFormating">
                        <img src="./images/Peach.png" className="profilePicture" alt="Princess Peach Profile"></img>
                        </div>
                        <blockquote className="primary-green">
                            <p>"You must try the mushrooms"</p>
                        </blockquote>
                    </article>
                </li>
                <li class="testimonialCard">
                    <article className="cardFormating">
                        <div role="img" aria-label="5 out of 5 stars">
                            <span aria-hidden="true">⭐ ⭐ ⭐ ⭐ ⭐</span>
                        </div>
                        <div className="imageFormating">
                        <img src="./images/Toad.png" className="profilePicture" alt="Toad Profile"></img>
                        </div>
                        <blockquote className="primary-green section">
                            <p>"Mushrooms are people too"</p>
                        </blockquote>
                    </article>
                </li>
                <li class="testimonialCard">
                    <article className="cardFormating">
                        <div role="img" aria-label="5 out of 5 stars">
                            <span aria-hidden="true">⭐ ⭐ ⭐ ⭐ ⭐</span>
                        </div>
                        <div className="imageFormating">
                        <img src="./images/Yoshi.png" className="profilePicture" alt="Yoshi Profile"></img>
                        </div>
                        <blockquote className="primary-green section">
                            <p>"Rawr"</p>
                        </blockquote>
                    </article>
                </li>
                <li class="testimonialCard">
                    <article className="cardFormating">
                        <div role="img" aria-label="4 out of 5 stars">
                            <span aria-hidden="true">⭐ ⭐ ⭐ ⭐ </span>
                        </div>
                        <div className="imageFormating">
                        <img src="./images/Bowser.png" className="profilePicture" alt="Bowser Profile"></img>
                        </div>
                        <blockquote className="primary-green section">
                            <p>"Loses a star, pasta was overcooked"</p>
                        </blockquote>
                    </article>
                </li>
            </ul>
        </section>
    );
}

export default Testimonials


