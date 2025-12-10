import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import AlertsArea from "./alerts-area";
import Footer from "@/src/layout/footers/footer";

const Alerts = () => {
  return (
    <>
      <main>
        <Breadcrumb top_title="Elements Alerts" title="Alerts" />
        <AlertsArea />
      </main>
      <Footer />
    </>
  );
};

export default Alerts;
