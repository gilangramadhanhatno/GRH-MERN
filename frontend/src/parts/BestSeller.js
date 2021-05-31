import React from "react";
import Button from "elements/Button/Button";

import "assets/scss/style.scss";

export default function BestSeller(props) {
  return (
    <section className="container">
      <h4 className="mb-3">Best Seller</h4>
      <div className="container-grid">
        {props.data.map((bestSeller) => {
          return (
            <div className="item column-4 row-2">
              <Button type="link" href={`/details/${bestSeller._id}`}>
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img src={bestSeller.imageUrl} alt={bestSeller.name} className="img-contain" />
                  </figure>
                </div>
              </Button>
              <div className="meta-wrapper text-center mt-3">
                <Button type="link" className="streched-link d-block text-white" href={`/details/${bestSeller._id}`}>
                  <h5>{bestSeller.name}</h5>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
