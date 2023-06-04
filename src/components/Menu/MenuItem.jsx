import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ category, image, link }) {
  return (
    <div className="menu-item col-md-4 col-sm-12 mb-5">
      <div className="image-wrapper">
        <img src={image} alt="Plate" className="img-fluid" />
        <div className="overlay">
          <Link to={link} className="link">
            <h2 className="category">{category}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
