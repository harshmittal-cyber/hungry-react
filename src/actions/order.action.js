import { getorders, getorder } from "../helpers/http/index";
import { setOrders, setOrder } from "../store/order";
import store from "../store/index";

export const getOrders = async () => {
  try {
    const { dispatch } = store;
    const res = await getorders();
    if (res.status === 200) {
      const { orders } = res.data;
      dispatch(setOrders({ orders }));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = async (payload) => {
  try {
    const { dispatch } = store;
    const res = await getorder(payload);
    if (res.status === 200) {
      const { order } = res.data;
      dispatch(setOrder({ order }));
    }
  } catch (err) {
    console.log(err);
  }
};
