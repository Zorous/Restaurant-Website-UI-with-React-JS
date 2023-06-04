import React from "react";

function SubMenuItem({ title, price, description, image }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="d-flex align-items-center">
        <img
          className="flex-shrink-0 img-fluid rounded-circle"
          src={image}
          alt=""
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{title}</span>
            <span className="text-primary">{price}</span>
          </h5>
          <small className="fst-italic">{description}</small>
        </div>
      </div>
    </div>
  );
}

export default SubMenuItem;
