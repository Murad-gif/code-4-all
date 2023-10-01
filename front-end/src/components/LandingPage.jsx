import React from "react";
import "../components/ImageSlider";
import ImageSlider from "../components/ImageSlider";
import MapSection from "../components/MapSection";
import Whylearn from "../components/WhyLearn";
import WhoAreWe from "../components/WhoAreWe";
import Header from "./Header";
import Sponsors from "../components/Sponsors";

function LandingPage() {
  return (
    <div>
      <Header/>
      <ImageSlider />
      <WhoAreWe />
      <Whylearn />
      <Sponsors />
      <MapSection />
    </div>
  );
}

export default LandingPage;
