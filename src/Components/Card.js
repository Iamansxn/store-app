import React from "react";
import "./Styles/body.css";
const Card = (props) => {
  const { add, product } = props;

  // console.log(product[id]);
  return (
    <div className="card">
      <img src={props.images} alt={props.name} width="75px" height="75px" />
      <h1>{props.name}</h1>
      <p>Rs {props.price}</p>
      <button onClick={() => add(product)}> Add to Cart</button>
    </div>
  );
};

export default Card;
