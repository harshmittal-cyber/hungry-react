import { addtocart, getcart } from "../helpers/http/index";
import { setCart, cartProgress } from "../store/cart";
import store from "../store/index";

export const getcartItems = async () => {
  try {
    const { auth } = store.getState();
    const { dispatch } = store;
    if (auth.isAuth) {
      const res = await getcart();
      if (res.status === 200) {
        const { cartItems } = res.data;
        const { cartTotal } = res.data.cart;
        const cartTotalItems = Object.keys(res.data.cartItems).length;
        if (cartItems) {
          dispatch(setCart({ cartItems, cartTotalItems, cartTotal }));
        }
      }
    } else {
      return;
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
  const { dispatch } = store;

  let cartItem = { ...CartItems };
  if (!cartItem) {
    cartItem = {};
  }
  dispatch(cartProgress(true));
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
            price: cartproduct.price,
          },
        ],
        newqty,
        cartTotal: cartproduct.price * quantity,
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
