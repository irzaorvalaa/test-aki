import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";

const FooterElement = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Elements Footer" title="Footer" />
        <Footer />
      </main>
    </>
  );
};

export default FooterElement;
