import React from "react";
import Products from "../Product/products";
import style from "./productcategory.module.css";

const ProductCategory = (props) => {
  const { category } = props;

  return (
    <div className={`${style.product_category}`} data-label={category.name}>
      <div className="ref">
        <div className={`${style.hrStyle}`}></div>
        <div className={`${style.categoryStyle} shadow-sm`}>
          <div className="text-sm md:text-base font-normal w-full  ">
            {category.name}
          </div>
        </div>
      </div>
      <div className={`${style.category_product} ${style.category_grid}  `}>
        {category.products.map((products) => (
          <Products key={products._id} product={products} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
