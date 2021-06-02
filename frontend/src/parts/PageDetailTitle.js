import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb/Breadcrumb";

export default function PageDetailTitle({ breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row mt-2">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
