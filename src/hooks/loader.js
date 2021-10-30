import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/auth";
import axios from "axios";

export function useLoading() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchb() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v2/refreshtoken`,
          {
            withCredentials: true,
          }
        );

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
