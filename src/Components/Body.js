import React from "react";
import Card from "./Card";
// import Cart from "./Cart";
// import Data from "/ReactApps/shop-app/src/Data";
import "./Styles/body.css";
// console.log(Data.Products[0].id);

function Body(props) {
  const { product, add } = props;
  return (
    <div className="display">
      {product.map((Prod) => (
        <Card
          id={Prod.id}
          name={Prod.name}
          price={Prod.price}
          images={Prod.images}
          add={add}
          product={Prod}
          key={Prod.id}
        />
      ))}
    </div>
  );
}
export default Body;
