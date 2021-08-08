import React from "react";

function products(props) {
  const { product } = props;

  return (
    <div style={productStyle}>
      <div className="overflow-hidden" data-label={`${product.name}`}>
        <div style={itemStyle}>
          <div className="w-full">
            <div className="min-w-0 relative overflow-hidden ">
              <div className="w-full">
                <img
                  src={`http://localhost:3000${product.productImage}`}
                  alt={`${product.name} image`}
                />
              </div>
              <div style={backgroundStyle}></div>
              <div style={priceStyle}>
                <span>&#x20b9; {product.price}</span>
              </div>
            </div>
          </div>
          <div className="w-full flex-wrap flex-basis m-3 ">
            <div style={descriptionStyle}>
              <span style={productName}>{product.name}</span>
              <span style={descriptionName} title={`${product.description}`}>
                {product.description}
              </span>
            </div>
            <div style={buttonSection}>
              <div className="self-center">
                <button
                  data-label="addtocart"
                  className="cursor-pointer p-2 border rounded  bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: "bold",
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
}

const productStyle = {
  width: "27%",
  marginBottom: "3rem",
  marginLeft: "3rem",
};

const itemStyle = {
  display: "flex",
  flexFlow: "row wrap",
  right: "0",
  left: "0",
  maxWidth: "100%",
  flexBasis: "auto",
  borderRadius: "3px",
  backgroundColor: "rgb(255, 255, 255)",
  boxShadow:
    "rgba(0 0 0 / 12%) 0px 2px 2px 0px,rgb(0 0 0 / 12%) 0px 2px 4px 0px",
  WebkitBoxPack: "center",
  justifyContent: "center",
  margin: "0rem",
};
const backgroundStyle = {
  backgroundImage: `url("./images/shadow.svg")`,
  minWidth: "0.3em",
  minHeight: "0.3em",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  width: "6rem",
  height: "4rem",
  position: "absolute",
  bottom: "1px",
};
const priceStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "rgb(255,255,255)",
  position: "absolute",
  top: "6.1rem",
  left: "0.6rem",
};

const descriptionStyle = {
  borderBottom: "0px",
  height: "5rem",
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
};

const productName = {
  flexBasis: "auto",
  justifyContent: "flex-start",
  fontSize: "1rem",
  fontWeight: "bold",
  WebkitBoxPack: "start",
};

const descriptionName = {
  flexBasis: "auto",
  lineHeight: "1.2",
  fontSize: "0.875rem",
  color: "rgba(122,122,122,0.87)",
  marginTop: "0.5rem",
  width: "90%",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const buttonSection = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  marginTop: "0.5rem",
  position: "relative",
};

export default products;
// bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
