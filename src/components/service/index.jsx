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
        <Breadcrumb
          top_title="Layanan Kami"
          title="Layanan Kami - Sentosa Jaya Mandiri Cirebon"
        />
        <OurService />
      </main>
      <Footer home_2={true} />
    </>
  );
};

export default ServiceTwo;
