import HeaderFive from "@/src/layout/headers/header-3";
import React from "react";
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import ProductHighlight from "./product-highlight";
import GalleryHighlight from "./gallery-highlight";
import Footer from "@/src/layout/footers/footer";
import Testi from "./testi";

const HomeSix = () => {
  return (
    <>
      <HeaderFive />
      <HeroArea />
      <div>
        <ServiceArea />
        <ProductHighlight />
        <GalleryHighlight />
        <Testi />
      </div>

      <Footer />
    </>
  );
};

export default HomeSix;
