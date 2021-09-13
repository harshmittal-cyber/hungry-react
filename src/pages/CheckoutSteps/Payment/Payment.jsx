import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addorder } from "../../../helpers/http/index";
import { resetCart } from "../../../store/cart";
import { getOrders } from "../../../actions/order.action";
import { setOrder } from "../../../store/order";

const Payment = ({ onPrev }) => {
  const cart = useSelector((state) => state.cart);
  const { useraddress } = useSelector((state) => state.Address);
  const dispatch = useDispatch();

  const confirmorder = async () => {
    try {
      const items = Object.keys(cart.CartItems).map((key) => ({
        productId: key,
        price: cart.CartItems[key].price,
        quantity: cart.CartItems[key].quantity,
      }));

      const totalAmount = Object.keys(cart.CartItems).reduce(
        (totalprice, key) => {
          const { price, quantity } = cart.CartItems[key];
          return totalprice + price * quantity;
        },
        0
      );

      const payload = {
        address: useraddress.id,
        items,
        totalAmount,
        paymentStatus: "pending",
        paymentType: "cod",
      };

      const res = await addorder(payload);
      console.log(res.data);
      if (res.status === 201) {
        const { order } = res.data;

        dispatch(setOrder({ order }));
        dispatch(resetCart());
        // getOrders();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>Payment</div>
      <input type="radio" id="cod" name="cod" value="COD" />
      <label htmlFor="cod">COD</label>
      <br />
      <br />
      <button className="root_button text_white" onClick={confirmorder}>
        Confirm Order
      </button>
      <br />
      <button onClick={onPrev}>Back</button>
    </div>
  );
};

export default Payment;
