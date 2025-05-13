import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          and are now redefining the industry with advanced technology
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Launched in 2024, Investa was created with a vision to break down
            the barriers faced by traders and investors in India, especially in
            terms of cost, support, and technology. Our mission is to make
            investing simpler, more transparent, and accessible for everyone.
          </p>
          <p>
            With a fresh perspective on the industry, we’ve built a platform
            that combines advanced technology with affordable pricing models.
            Investa aims to offer an intuitive user experience that empowers
            investors to make informed financial decisions with ease.
          </p>
          <p>
            Though we’re a new player in the market, our focus on transparency
            and customer-centric features is designed to make a lasting impact.
            Investa is here to change how the next generation of investors trade
            and invest in India.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition to our platform, Investa is committed to empowering
            retail traders and investors through popular open online educational
            initiatives and community-driven support. We believe in sharing
            knowledge and fostering a learning environment for all.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            our fintech fund and incubator, we invest in promising fintech
            startups with the vision of expanding and enhancing the Indian
            capital markets, ensuring a future of growth and innovation.
          </p>
          <p>
            At Investa, we’re constantly exploring new ideas and improving our
            platform. Stay updated with our latest developments on our blog, or
            see what the media has to say about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
