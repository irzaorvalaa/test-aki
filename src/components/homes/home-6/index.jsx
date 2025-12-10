import HeaderFive from "@/src/layout/headers/header-3";
import React from "react";
import HeroArea from "./hero-area";
import ServiceArea from "./service-area";
import ProductHighlight from "./product-highlight";
import GalleryHighlight from "./gallery-highlight";
import TestimonialArea from "./testimonial-area";
import Footer from "@/src/layout/footers/footer";

const HomeSix = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <HeroArea />
        <ServiceArea />
        <ProductHighlight />
        <GalleryHighlight />
        <TestimonialArea />
      </main>
      <Footer />
    </>
  );
};

export default HomeSix;
