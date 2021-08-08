import React from "react";
import Products from "./products";
function ProductCategory(props) {
  const { category } = props;
  const hrStyles = {
    borderBottom: "1px solid rgb(210,210,210)",
    position: "relative",
    width: "76%",
    top: "1.5rem",
    left: "1rem",
    zIndex: "-1",
  };

  const categoryStyles = {
    background: "rgb(255,255,255)",
    borderRadius: "2rem",
    display: "inline-flex",
    alignItems: "center",
    padding: "0.7rem 2rem",
    margin: "0px 0px 1rem 1.5rem",
    zIndex: "999",
    WebkitBoxAlign: "center",
    marginLeft: "2.5rem",
  };

  return (
    <div className="relative top-4">
      <div className="ref">
        <div style={hrStyles}></div>
        <div style={categoryStyles}>
          <div className="font-normal w-full ">{category.name}</div>
        </div>
      </div>
      <div className="mr-16 relative h-4/5 flex flex-wrap mb-2 md:mr-52 lg:mr-80  ">
        {category.products.map((products) => (
          <Products key={products._id} product={products} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
