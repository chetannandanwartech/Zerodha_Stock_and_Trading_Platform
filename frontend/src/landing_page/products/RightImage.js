import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function RightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col p-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </div>
        <div className="col">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
