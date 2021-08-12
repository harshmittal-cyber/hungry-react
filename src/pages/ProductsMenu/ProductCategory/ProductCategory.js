import React from "react";
import Products from "../Product/products";
import style from "./productcategory.module.css";

const ProductCategory = (props) => {
  const { category } = props;

  return (
    <div className="relative top-4">
      <div className="ref">
        <div className={`${style.hrStyle}`}></div>
        <div className={`${style.categoryStyle}`}>
          <div className="text-sm md:text-base font-normal w-full ">
            {category.name}
          </div>
        </div>
      </div>
      {/* <div className="mr-4 relative h-4/5  flex flex-wrap mb-2  md:mr-8 lg:mr-28 xl:mr-52 2xl:mr-80  "> */}
      <div className="mr-16 relative  mb-2 h-4/5 grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 relative h-4/5">
        {category.products.map((products) => (
          <Products key={products._id} product={products} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
