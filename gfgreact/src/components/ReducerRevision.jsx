import React, { useReducer } from "react";
import { products } from "./CartProducts";
import "./ReducerRevision.css";

const ReducerRevision = () => {
  const initialCartValues = [];
  const cartDispacher = (state, action) => {
    switch (action.type) {
      case "ADDTOCART":
        const item = action.payload;

        // Check if item already in cart
        const exists = state.find((cartItem) => cartItem.id === item.id);

        if (exists) {
          // If already in cart, increase quantity
          return state.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          // Else add with quantity 1
          return [...state, { ...item, quantity: 1 }];
        }
      default:
        return state;
    }
  };

  const handelAddToCart = (id) => {
    const selectedProduct = products.find((p) => p.id === id);
    cartDispatch({ type: "ADDTOCART", payload: selectedProduct });
  };
  const [cartProducts, cartDispatch] = useReducer(
    cartDispacher,
    initialCartValues
  );
  return (
    <>
      <div className="container">
        <h1>All Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>NPR {product.price}</p>
              <button onClick={() => handelAddToCart(product.id)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <h2>Cart Items</h2>
      <ul>
        {cartProducts.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = NPR {item.price * item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReducerRevision;
