import React from "react";
import {Link} from 'react-router-dom';

const HomePage = ({ linkTo, image, heading, paragraph }) => {
  return (
      <div
        className="col-md-4 d-flex justify-content-center"
      >
        <Link
          to={linkTo}
          class="text-decoration-none
                            text-reset"
        >
          <div className="text-center">
            <img
              src={image}
              class="img-fluid w100 mb-3"
              alt="Hotspot
                                    WiFi"
            />
            <h5>{heading}</h5>
            <p>{paragraph}</p>
          </div>
        </Link>
      </div>
  );
};

export default HomePage;
