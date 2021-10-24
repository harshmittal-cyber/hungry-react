import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/auth";
import { getcartItems } from "../actions/cart.action";
import { getOrders } from "../actions/order.action";
import axios from "axios";

export function useLoading() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchb() {
      try {
        const { data } = await axios.get(
          `https://hungryjs.herokuapp.com/api/v2/refreshtoken`,
          {
            withCredentials: true,
          }
        );

        //getting cart items
        await getcartItems();
        //getting all orders
        await getOrders();
        //getting order
        dispatch(setAuth(data));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchb();
  }, []);

  return { loading };
}
