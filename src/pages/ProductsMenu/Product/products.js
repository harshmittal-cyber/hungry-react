import React from "react";
import style from "./products.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const products = (props) => {
  const { product } = props;

  return (
    <div className={`${style.productStyle}`}>
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
                <button
                  data-label="addtocart"
                  className="cursor-pointer p-1.5  border rounded  sm:p-2"
                  style={{ border: "1.5px solid green" }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
