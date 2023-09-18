// import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Data from "./Data";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const { Products } = Data;
  const add = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    // console.log(cart)
  };
  const remove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Body product={Products} add={add} />
      <Cart cart={cart} remove={remove} add={add} />
    </div>
  );
};

export default App;
