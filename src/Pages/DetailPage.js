import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./DetailPage.css";

import Back from "../img/Back.svg";

const DetailPage = () => {
  let location = useLocation();

  let pathName = location.pathname;

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers${pathName}`)
      .then((response) => response.json())
      .then((data) => setBeer(data));
  }, [pathName]);

  return (
    <section className="detailsPage">
      <img src={beer.image_url} alt="beer" />
      <div className="detailsText">
        <h2>{beer.name}</h2>
        <p className="tagline">{beer.tagline}</p>
        <div className="specifics">
          <div>
            <p>First brewed:</p>
            <p>Attenuation level:</p>
          </div>
          <div>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
          </div>
        </div>
        <p className="descriptionText">{beer.description}</p>
        <Link to="/allbeers">
          <img src={Back} alt="back button" />
        </Link>
      </div>
    </section>
  );
};

export default DetailPage;
