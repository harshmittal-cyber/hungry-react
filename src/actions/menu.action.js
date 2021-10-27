import { setMenu } from "../store/menu";
import store from "../store/index";

export const getCategories = async () => {
  try {
    const { dispatch } = store;

    fetch(`${process.env.REACT_APP_API_URL}/api/v1/admin/category/getcategory`)
      .then((res) => res.json())
      .then((categories) => {
        dispatch(setMenu(categories));
      });
  } catch (err) {
    console.log(err);
  }
};
