import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path, current }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <Link to={item.to} className="text-decoration-none">
              {item.label}
            </Link>
          </li>
        ))}
        <li className="breadcrumb-item active" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
