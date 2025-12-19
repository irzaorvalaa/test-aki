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
      <main style={{ padding: 0, margin: 0, overflow: "hidden" }}>
        <HeroArea />
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}
        >
          <ServiceArea />
          <ProductHighlight />
          <GalleryHighlight />
          <TestimonialArea />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeSix;
