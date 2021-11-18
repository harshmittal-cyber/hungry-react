import React, { useState, useEffect } from "react";
import ProductCategory from "./ProductCategory/ProductCategory";
import { useSelector } from "react-redux";
import { getCategories } from "../../actions/menu.action";

const Menu = () => {
  const { categories } = useSelector((state) => state.menu);
  const [Categories, setCategories] = useState(categories);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

  useEffect(() => {
    setCategories(categories);
  }, [categories]);

  return (
    <>
      <div style={{ marginTop: "1em" }}>
        {Categories.map((category) => (
          <ProductCategory key={category._id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Menu;
