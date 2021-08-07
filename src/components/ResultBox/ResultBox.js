import React from "react";
import { Link } from "react-router-dom";
import "./ResultBox.css";
const ResultBox = ({ title, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="item">{title}</div>
    </Link>
  );
};

export default ResultBox;
