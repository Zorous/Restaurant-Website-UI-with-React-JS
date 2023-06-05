import React from 'react'

function Supplement({image, title}) {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="team-item text-center rounded">
      <div className="rounded-circle overflow-hidden m-4">
        <img className="img-fluid rounded-circle" src={image} alt="" />
      </div>
      <h5 className="mb-4">{title}</h5>
    </div>
  </div>
  )
}

export default Supplement
