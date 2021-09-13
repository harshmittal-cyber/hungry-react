import { getaddress } from "../helpers/http/index";
import { setAddress } from "../store/address";
import store from "../store/index";

export const getAddress = async () => {
  try {
    const { auth } = store.getState();
    const { dispatch } = store;
    if (auth.isAuth) {
      const res = await getaddress();
      if (res.status === 200) {
        const { address } = res.data;
        address.address.id = address._id;
        dispatch(setAddress(address));
      }
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
  }
};
