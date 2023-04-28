import React from "react";

function SubMenuItem({ title, price, description, image }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="d-flex align-items-center">
        <img
          class="flex-shrink-0 img-fluid rounded"
          src={image}
          alt=""
          style={{ width: "80px" }}
        />
        <div class="w-100 d-flex flex-column text-start ps-4">
          <h5 class="d-flex justify-content-between border-bottom pb-2">
            <span>{title}</span>
            <span class="text-primary">{price}</span>
          </h5>
          <small class="fst-italic">{description}</small>
        </div>
      </div>
    </div>
  );
}

export default SubMenuItem;
