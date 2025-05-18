import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/lalitSinghBani.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Lalit Singh Bani"
          />
          <h4 className="mt-5">Lalit Singh Bani</h4>
          <h6>Co-Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Lalit co-founded Investa in 2024 with the aim to simplify investing
            and make financial markets accessible to everyone. With a deep
            passion for technology and finance, he strives to build a platform
            that focuses on transparency, user empowerment, and cutting-edge
            tools for investors.
          </p>
          <p>
            Lalit is committed to shaping the future of the investment landscape
            in India, ensuring that users can make smarter financial decisions
            with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
