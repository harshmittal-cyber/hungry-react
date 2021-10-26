import { setMenu } from "../store/menu";
import store from "../store/index";

export const getCategories = async () => {
  try {
    const { dispatch } = store;

    fetch(`${process.env.REACT_APP_PROD_API}/api/v1/admin/category/getcategory`)
      // fetch("http://localhost:3000/api/v1/admin/category/getcategory")
      .then((res) => res.json())
      .then((categories) => {
        dispatch(setMenu(categories));
      });
  } catch (err) {
    console.log(err);
  }
};
