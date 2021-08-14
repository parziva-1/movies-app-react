import React from "react";
import { Link } from "react-router-dom";
import "./ResultBox.css";
const ResultBox = ({ title, id }) => {
  return (
    <div className="item" >
      <Link to={`/movie/${id}`}>
        <div>{title}</div>
      </Link>
    </div>
  );
};

export default ResultBox;
