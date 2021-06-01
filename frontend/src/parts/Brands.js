import React from "react";

import "assets/scss/style.scss";

export default function Brands(props) {
  return (
    <section className="container">
      <div className="container-grid">
        {props.data.map((brand) => {
          return (
            <div className="brand item column-3 mt-5">
              <img src={brand.imageUrl} alt={brand.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
