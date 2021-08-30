import { addtocart, getcart } from "../helpers/http/index";
import { setCart } from "../store/cart";
import store from "../store/index";
// import { useDispatch as dispatch } from "react-redux";

export const getcartItems = async () => {
  try {
    const { dispatch } = store;
    const res = await getcart();
    if (res.status === 200) {
      const { cartItems } = res.data;
      const cartTotalItems = Object.keys(res.data.cartItems).length;
      if (cartItems) {
        dispatch(setCart({ cartItems, cartTotalItems }));
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export async function addToCart(cartproduct, newqty = 1) {
  const {
    auth,
    cart: { CartItems },
  } = store.getState();
  let cartItem = { ...CartItems };
  if (!cartItem) {
    cartItem = {};
  }

  const quantity = cartItem[cartproduct._id]
    ? parseInt(cartItem[cartproduct._id].quantity + newqty)
    : 1;

  if (auth.isAuth) {
    try {
      const payload = {
        cartItems: [
          {
            productId: cartproduct._id,
            quantity: quantity,
          },
        ],
      };

      const res = await addtocart(payload);
      if (res.status === 201) {
        getcartItems();
      }
    } catch (err) {
      console.log("carterr", err);
    }
  }
}
