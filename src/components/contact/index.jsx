import Footer from "@/src/layout/footers/footer";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import HeaderFive from "@/src/layout/headers/header-3";
import ContactStandardArea from "./contact-standard-area";
import ContactStandardFormArea from "./contact-standard-form-area";
import ContactMap from "../common/map";

const Contact = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <Breadcrumb top_title="Contact us" title="Contact" />
        <ContactStandardArea />
        <ContactMap />
        <ContactStandardFormArea />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
