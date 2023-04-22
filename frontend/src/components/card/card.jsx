import React from "react";
import { Link } from 'react-router-dom';
import "./card.css";
const Card = ({ semName, to }) => {
  return (
    <Link to={to} >
      <div className="card-div">
        <h2 className="h2-card">{semName}</h2>
      </div>
    </Link>
  );
};

export default Card;
