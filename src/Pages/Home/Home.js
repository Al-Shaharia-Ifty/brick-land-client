import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import ExtraSection from "./ExtraSection";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummery />
      <ExtraSection />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
