import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory/ProductCategory";
// import style from "./Menu.module.css";
const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/admin/category/getcategory")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  return (
    <div style={{ marginTop: "1em" }}>
      {/* <div
        className={`${style.menunav}`}
        style={{
          marginTop: "-3em",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          boxShadow: "rgb(210 221 233) 5px 5px 5px",
          transition: "all 1s ease-in-out 0s",
        }}
      ></div> */}
      {categories.map((category) => (
        <ProductCategory key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Menu;
