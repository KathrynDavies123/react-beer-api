import {Link} from "react-router-dom";
import AllBeers from "../img/allbeers.PNG";
import RandomBeer from "../img/randombeer.PNG";

import "./Home.css";

const Home = () => {
    return ( <section className="homepage">
        <article>
            <img src={AllBeers} alt="beer bottles stacked on a shelf"/>
            <Link to="/allbeers">All Beers</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
        </article>
        <article>
            <img src={RandomBeer} alt="glasses of beer in a line on a bar" />
            <Link to="/randombeer">Random Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
        </article>
    </section>);
}
 
export default Home;