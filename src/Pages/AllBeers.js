import { useEffect, useState } from "react";
import BeerCard from "../Components/BeerCard";

import "./AllBeers.css";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);
  return (
    <section className="allBeers">
      {[...beers].map((item, index) => (
        <BeerCard key={"Beercard" + index} {...item} id={item._id}/>
      ))}
    </section>
  );
};

export default AllBeers;
