import React, { useState } from "react";
import style from "./products.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useSelector } from "react-redux";
import { addToCart } from "../../../actions/cart.action";

const Products = (props) => {
  const { product } = props;
  const { isAuth } = useSelector((state) => state.auth);
  const [adding, setAdding] = useState(false);

  function additemincart(cartproduct) {
    addToCart(cartproduct);
  }

  return (
    <div className={`${style.productStyle} shadow-lg`}>
      <div className="overflow-hidden" data-label={`${product.name}`}>
        <div className={`${style.itemStyle}`}>
          <div className="w-full">
            <div className={`${style.product_image}`}>
              <div className={`${style.img_cvr}`}>
                <LazyLoadImage
                  src={`http://localhost:3000${product.productImage}`}
                  alt={`${product.name}`}
                />
              </div>
              <div className={`${style.backgroundStyle}`}></div>
              <div className={`${style.priceStyle}  `}>
                <span className={`${style.rupee}  text-sm xl:text-base`}>
                  {product.price}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex-wrap flex-basis m-3 ">
            <div className={`${style.descriptionStyle}`}>
              <span className={`${style.productName}`}>{product.name}</span>
              <span
                className={`${style.descriptionName}`}
                title={`${product.description}`}
              >
                {product.description}
              </span>
            </div>
            <div className={`${style.buttonSection}`}>
              <div className="self-center">
                {isAuth && adding ? (
                  <button
                    data-label="addtocart"
                    className="cursor-pointer p-1.5  border rounded  sm:p-2"
                    style={{ border: "1.5px solid grey" }}
                    disabled
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                      className="text-white tracking-wider"
                    >
                      Going To Cart
                    </span>
                  </button>
                ) : (
                  <button
                    data-label="addtocart"
                    className="cursor-pointer p-1.5  border rounded  sm:p-2"
                    style={{ border: "1.5px solid green" }}
                    onClick={() => additemincart(product)}
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: "bold",
                        color: "green",
                      }}
                      className="text-white tracking-wider"
                    >
                      ADD TO CART
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
