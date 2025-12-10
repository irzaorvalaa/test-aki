import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Galeri from "../components/galeri";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gallery"} />
      <Galeri />
    </Wrapper>
  );
};

export default index;
