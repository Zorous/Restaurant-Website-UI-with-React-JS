import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem({category,image,link}) {
  return (
    <div class="col-md-4 mb-5">
    <div class="image-wrapper">
      <img src={image} alt="Plate 1" />
      <div class="overlay">
        <Link to={link}>
          <h2>{category}</h2>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default MenuItem
