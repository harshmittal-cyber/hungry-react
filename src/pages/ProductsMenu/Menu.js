import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory/ProductCategory";
import Footer from "../../components/Footer/Footer";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    fetch("http://localhost:3000/api/v1/admin/category/getcategory")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  return (
    <>
      <div style={{ marginTop: "1em" }}>
        {categories.map((category) => (
          <ProductCategory key={category._id} category={category} />
        ))}
      </div>
      {show ? <Footer /> : ""}
    </>
  );
};

export default Menu;
