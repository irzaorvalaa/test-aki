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
        <Breadcrumb
          top_title="Tentang Kami"
          title="Tentang Kami - Sentosa Jaya Mandiri Cirebon"
        />
        <AboutUs />
        <BrandArea />
      </main>
      <Footer />
    </>
  );
};

export default About;
