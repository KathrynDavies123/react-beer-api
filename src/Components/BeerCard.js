import { Link } from "react-router-dom";

import "./BeerCard.css";

const BeerCard = (props) => {
  return (
    <div>
      <img src={props.image_url} alt="beer" />
      <div className="details">
        <h2>{props.name}</h2>
        <p className="description">{props.tagline}</p>
        <p className="createdby">{props.contributed_by}</p>
        <Link to={`/${props.id}`}>Details</Link>
      </div>
    </div>
  );
};

export default BeerCard;
