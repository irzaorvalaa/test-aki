import { useDispatch } from "react-redux";
import WhatsAppFloating from "../hooks/scroll-to-top";
import { get_cart_products } from "../redux/features/cart/cartSlice";
import { useEffect } from "react";
import { get_wishlist_products } from "../redux/features/wishlist/wishlistSlice";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
  }, [dispatch]);
  return (
    <>
      {children}
      <WhatsAppFloating />
    </>
  );
};

export default Wrapper;
