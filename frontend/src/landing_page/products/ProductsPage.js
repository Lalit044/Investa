import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Investa Pro"
        productDesription="With real-time market data, advanced charting tools, and an elegant, user-friendly interface, Investa Pro is designed to elevate your trading experience. Whether you're a beginner or a seasoned investor, trade seamlessly across all devices—Android, iOS, and web."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Investa Console"
        productDesription="Get a comprehensive view of your trades and investments with Investa Console. With detailed reports, visualizations, and powerful analytics, it’s your go-to tool to track performance and make informed decisions."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Investa Funds"
        productDesription="Buy direct mutual funds effortlessly with Investa Funds. Enjoy a seamless, commission-free experience and have your investments delivered directly to your Demat account, accessible anytime via your Android, iOS, or web devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Investa Connect API"
        productDesription="Leverage our simple HTTP/JSON APIs to build robust trading experiences. Whether you’re a startup or an established business, use Investa Connect to build your own investment app and connect with our growing client base."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Investa Learn"
        productDesription="Investa Learn offers bite-sized lessons, rich illustrations, and simple explanations to help you understand the stock market—anytime, anywhere. Perfect for beginners, our mobile-friendly format makes learning quick and engaging."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to Know More About Our Tech Stack?
      </p>
      <Universe />
      <Footer />
    </>
  );
}

export default PricingPage;
