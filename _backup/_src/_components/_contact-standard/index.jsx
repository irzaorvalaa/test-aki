import HeaderFive from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ContactStandardArea from "./contact-standard-area";
import ContactMap from "../common/map";
import ContactStandardFormArea from "./contact-standard-form-area";
import Footer from "@/src/layout/footers/footer";

const ContactStandard = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <Breadcrumb top_title="Contact Us Standard" title="Contact Standard" />
        <ContactStandardArea />
        <ContactMap />
        <ContactStandardFormArea />
      </main>
      <Footer />
    </>
  );
};

export default ContactStandard;
