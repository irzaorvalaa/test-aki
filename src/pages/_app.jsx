import AOS from "aos";
import "aos/dist/aos.css";
import "@/src/styles/index.css";
import store from "../redux/strore";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { poppins, rubik } from "../styles/fonts";
import "@/public/assets/css/fontawesome-fix.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  return (
    <Provider store={store}>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppins.style.fontFamily};
          --font-rubik: ${rubik.style.fontFamily};
        }

        body {
          font-family: var(--font-poppins), sans-serif !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--font-rubik), sans-serif !important;
        }
      `}</style>

      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}
