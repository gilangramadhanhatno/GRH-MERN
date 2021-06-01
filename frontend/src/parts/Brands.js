import React from "react";
import Fade from "react-reveal/Fade";

import "assets/scss/style.scss";

export default function Brands(props) {
  return (
    <Fade>
      <section className="container">
        <div className="container-grid">
          {props.data.map((brand, index) => {
            return (
              <Fade bottom delay={300 * index}>
                <div key={`brand-${brand._id}`} className="brand item column-3 mt-5">
                  <img src={brand.imageUrl} alt={brand.name} />
                </div>
              </Fade>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
