
import { Link } from "react-router-dom";

function Specials(){
    return(
            <div className="specials">
                <h1>Specials</h1>
            <div className="flexH">
                <card className="card">
                    <div>
                        <img src=".\images\9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg" alt="salad"   width="300px" overflow="hidden"></img>
                    </div>
                    <div className="specialgrid">
                        <div className="cardTitle">
                            Greek salad
                        </div>
                        <div className="align-right highlight" style={{ color: '#EE9972'}}>
                            $12.99
                        </div>
                        <div className="paragraphText one">
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                        </div>
                        <div className="highlight">
                            Order a delivery
                        </div>
                        <div className="align-right">
                        <img src=".\images\f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg" alt="bike logo" width="50px"></img>
                        </div>
                    </div>
                </card>
                <card className="card">
                    <div>
                        <img src=".\images\5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg" alt="bruchetta" width="300px" overflow="hidden"></img>
                    </div>
                    <div className="specialgrid">
                        <div className="cardTitle">
                            Bruchetta
                        </div>
                        <div className="align-right highlight" style={{ color: '#EE9972'}}>
                            $5.99
                        </div>
                        <div className="paragraphText one">
                           Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                        </div>
                        <div className="highlight">
                            Order a delivery
                        </div>
                        <div className="align-right">
                        <img src=".\images\f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg" alt="bike logo" width="50px"></img>
                        </div>
                    </div>
                </card>
                <card className="card">
                    <div>
                        <img src=".\images\9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg" alt="salad" width="300px" overflow="hidden"></img>
                    </div>
                    <div className="specialgrid">
                        <div className="cardTitle">
                            Greek salad
                        </div>
                        <div className="align-right highlight" style={{ color: '#EE9972'}}>
                            $12.99
                        </div>
                        <div className="paragraphText one">
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                        </div>
                        <div className="highlight">
                            Order a delivery
                        </div>
                        <div className="align-right">
                        <img src=".\images\f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg" alt="bike logo" width="50px"></img>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    );
}

export default Specials;



