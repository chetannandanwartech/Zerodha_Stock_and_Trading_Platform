import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return (
        <div className="container border-bottom mb-5">
            <div className="row text-center mt-5 mb-5 p-3">
                <h1 className="fs-2">Zerodha Products</h1>
                <h3 className="text-muted mt-2 fs-4">Sleek, modern, and intuitive trading platforms</h3>
                <p className="mt-3">Check out our <a href="" style={{textDecoration: "none"}}>investment offerings <FontAwesomeIcon icon={faArrowRightLong} /> </a> </p>
            </div>

            <div className="row">
                <div className="col"></div>
                <div className="col"></div>

            </div>
        </div>
    );
}

export default Hero;
