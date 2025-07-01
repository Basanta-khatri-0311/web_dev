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
          alert("Iteam is alread in the cart");
          return state;
        } else {
          // Else add with quantity 1
          return [...state, { ...item, quantity: 1 }];
        }
      case "INCREASEQUANTITY":
        const increasingItem = action.payload;
        return state.map((cartItem) =>
          cartItem.id === increasingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      case "DECREASEQUANTITY":
        const decreasingItem = action.payload;
        return state.map((cartItem) =>
          cartItem.id === decreasingItem.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
              }
            : cartItem
        );
      case "REMOVEPRODUCTFROMCART":
        const removingProduct = action.payload;
        return state.filter((cartItem) => cartItem.id !== removingProduct.id);

      case "CLEARCART" :
        return []
      default:
        return state;
    }
  };

  const handelAddToCart = (id) => {
    const selectedProduct = products.find((p) => p.id === id);
    cartDispatch({ type: "ADDTOCART", payload: selectedProduct });
  };

  const handelQuantityIncrease = (id) => {
    const increasedProduct = products.find((p) => p.id === id);
    cartDispatch({ type: "INCREASEQUANTITY", payload: increasedProduct });
  };

  const handelQuantityDecrease = (id) => {
    const decreasedProduct = products.find((p) => p.id === id);
    cartDispatch({ type: "DECREASEQUANTITY", payload: decreasedProduct });
  };

  const handelRemoveFromCart = (id) => {
    const removingProduct = products.find((p) => p.id === id);
    cartDispatch({ type: "REMOVEPRODUCTFROMCART", payload: removingProduct });
  };

  const handelClearCart = () => {
    cartDispatch({type: "CLEARCART"})
  }

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
      <button onClick={handelClearCart}>Clear Cart</button>
      <ul>
        {cartProducts.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = NPR {item.price * item.quantity}
            <button onClick={() => handelQuantityIncrease(item.id)}>
              Increase
            </button>
            <button
              onClick={() => handelQuantityDecrease(item.id)}
              disabled={item.quantity === 1}
            >
              Decrease
            </button>
            <button onClick={() => handelRemoveFromCart(item.id)}>
              Remove From Cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReducerRevision;
