import HeaderFive from "@/src/layout/headers/header-3";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import OurService from "./our-service";
import Footer from "@/src/layout/footers/footer";

const ServiceTwo = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <Breadcrumb top_title="Service Style 02" title="Service 02" />
        <OurService />
      </main>
      <Footer home_2={true} />
    </>
  );
};

export default ServiceTwo;
