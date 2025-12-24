import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="mt-3">Support Portal</h4>
        <a href="" className="me-5 mt-3">Track Tickets</a>
      </div>
      <div className=" row p-3 m-3">
        <div className=" col-5 p-3">
          <h1 className="fs-4">
            Searched for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: How do I activate F&O" />
          <br/>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className=" col-5 p-3">
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeover and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday Leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
