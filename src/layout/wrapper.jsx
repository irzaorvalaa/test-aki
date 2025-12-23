// wrapper.jsx
import { useDispatch } from "react-redux";
import WhatsAppFloating from "../hooks/scroll-to-top";
import { get_cart_products } from "../redux/features/cart/cartSlice";
import { useEffect } from "react";
import { get_wishlist_products } from "../redux/features/wishlist/wishlistSlice";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
  }, [dispatch]);

  return (
    <>
      <main role="main" id="main-content">
        {children}
      </main>
      <ToastContainer />
      <WhatsAppFloating />
    </>
  );
};

export default Wrapper;
