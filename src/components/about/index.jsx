import HeaderFive from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AboutUs from "./about-us";
import BrandArea from "./brand-area";
import Footer from "@/src/layout/footers/footer";

const About = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <Breadcrumb top_title="About Style 01" title="About" />
        <AboutUs />
        <BrandArea />
      </main>
      <Footer />
    </>
  );
};

export default About;
