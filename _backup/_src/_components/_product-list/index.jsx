import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import ProductArea from "../product/product-area";

const ProductList = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Product List" title="Product List" />
        <ProductArea product_list={true} />
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
