import React from "react";
import Button from "elements/Button/Button";
import Fade from "react-reveal/Fade";

import "assets/scss/style.scss";

export default function Product(props) {
  return (
    <section className="container" ref={props.refProduct}>
      <Fade>
        <h4 className="mb-3 title-product">Product</h4>
        <div className="product container-grid">
          {props.data.map((product, index) => {
            return (
              <Fade bottom delay={500 * index}>
                <div key={`product-${product.index}}`} className="item column-3 row-2">
                  <Button type="link" href={`/details/${product._id}`}>
                    <div className="card card-featured">
                      <figure className="img-wrapper">
                        <img src={product.imageUrl} alt={product.name} className="img-contain" />
                      </figure>
                    </div>
                  </Button>
                  <div className="meta-wrapper text-center mt-3">
                    <Button type="link" className="d-block text-white" href={`/details/${product._id}`}>
                      <h5>{product.name}</h5>
                      <p>${product.price}</p>
                    </Button>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
