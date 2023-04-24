import React from "react";
import { Link } from "react-router-dom";
import "./DashBoardCard.css"
const DashBoardCard = ({  to ,branch , data}) => {
  return (
      <div className="dashboard-container">
        <p><b>Subject Name:</b> {data.name}</p>
        <p><b>Paper Year:</b> {data.year}</p>
        <p><b>Branch:</b> {branch}</p>
        <Link  to={to} state={{data:data}} className="edit-btn">Edit</Link>
      </div>
  );
};

export default DashBoardCard;
