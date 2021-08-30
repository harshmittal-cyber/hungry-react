import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/auth";
import { getcartItems } from "../actions/cart.action";

export function useLoading() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchb = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v2/refreshtoken`,
          {
            withCredentials: true,
          }
        );
        //getting cart items
        await getcartItems();
        dispatch(setAuth(data));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchb();
  }, []);

  return { loading };
}
