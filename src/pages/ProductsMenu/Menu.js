import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";

function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/admin/category/getcategory")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <ProductCategory key={category._id} category={category} />
      ))}
    </div>
  );
}

export default Menu;
