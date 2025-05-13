import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4 text-center" id="supportWrapper" style={{ color: "white" }}>
        <h4 className="mb-2">Support Portal</h4>
        <a href="" className="btn btn-link text-white" style={{ fontSize: "1.1rem" }}>Track Tickets</a>
      </div>
      <div className="row p-4 m-3">
        <div className="col-lg-6 col-12 p-3">
          <h1 className="fs-3 mb-3" style={{ color: "white" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-4"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <h5 className="mb-3" style={{ color: "white" }}>Helpful Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="" className="text-white" style={{ textDecoration: "none", lineHeight: "2" }}>
                Track Account Opening
              </a>
            </li>
            <li>
              <a href="" className="text-white" style={{ textDecoration: "none", lineHeight: "2" }}>
                Track Segment Activation
              </a>
            </li>
            <li>
              <a href="" className="text-white" style={{ textDecoration: "none", lineHeight: "2" }}>
                Intraday Margins
              </a>
            </li>
            <li>
              <a href="" className="text-white" style={{ textDecoration: "none", lineHeight: "2" }}>
                Kite User Manual
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-12 p-3">
          <h1 className="fs-3 mb-3" style={{ color: "white" }}>Featured</h1>
          <ol className="mb-4">
            <li style={{ marginBottom: "10px" }}>
              <a href="" className="text-white" style={{ textDecoration: "none" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="" className="text-white" style={{ textDecoration: "none" }}>
                Latest Intraday Leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
