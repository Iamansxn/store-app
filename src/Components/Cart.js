import React from "react";
function Cart(props) {
  const { cart, add, remove } = props;
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const msg = () => {
    alert("thanks for Shopping");
  };
  return (
    <div className="bill">
      <h1>Cart</h1>
      <div>{cart.length === 0 && <div>Cart is Empty</div>}</div>
      {cart.map((items) => (
        <div key={items.id}>
          <div>{items.name}</div>
          <div>
            {console.log(items)}
            <button onClick={() => remove(items)}>-</button>
            <button onClick={() => add(items)}>+</button>
          </div>
          <div>
            {items.qty}X${items.price}={items.qty * items.price}
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div>
          <p>Total:${total}</p>
          <button onClick={msg}>Buy Now</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
