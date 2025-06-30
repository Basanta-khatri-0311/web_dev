import React, { useReducer } from "react";
import { products } from "./Products";
import "./FilteringTaskReducer.css"; 

const FilteringTaskReducer = () => {
  const initialValue = {
    price: "",
    discount: "",
    category: "",
  };

  const filterReducer = (state, action) => {
    switch (action.type) {
      case "PRICE":
        return { ...state, price: action.payload };
      case "DISCOUNT":
        return { ...state, discount: action.payload };
      case "CATEGORY":
        return { ...state, category: action.payload };
      default:
        return state;
    }
  };

  const [{ price, discount, category }, dispatchFilter] = useReducer(
    filterReducer,
    initialValue
  );

  const handlePriceChange = (e) => {
    dispatchFilter({ type: "PRICE", payload: e.target.value });
  };
  const handleDiscountChange = (e) => {
    dispatchFilter({ type: "DISCOUNT", payload: e.target.value });
  };
  const handleCategoryChange = (e) => {
    dispatchFilter({ type: "CATEGORY", payload: e.target.value.toLowerCase() });
  };

  // Apply filters one by one
  const filteredByPrice =
    price && !isNaN(price)
      ? products.filter((p) => p.price <= Number(price))
      : products;

  const filteredByDiscount =
    discount && !isNaN(discount)
      ? filteredByPrice.filter((p) => p.discount >= Number(discount))
      : filteredByPrice;

  const filteredByCategory =
    category && category.trim() !== ""
      ? filteredByDiscount.filter(
          (p) => p.category.toLowerCase().includes(category.trim())
        )
      : filteredByDiscount;

  return (
    <div className="container">
      <div className="filter-inputs">
        <input
          value={price}
          onChange={handlePriceChange}
          type="number"
          placeholder="Filter price (max)"
        />
        <input
          value={discount}
          onChange={handleDiscountChange}
          type="number"
          placeholder="Filter discount (min %)"
        />
        <input
          value={category}
          onChange={handleCategoryChange}
          type="text"
          placeholder="Filter category (Shoes, Shirts, etc)"
        />
      </div>

      <h1 className="title">Filtered Products</h1>

      <div className="grid">
        {filteredByCategory.length === 0 ? (
          <p>No products match your filter.</p>
        ) : (
          filteredByCategory.map((product) => (
            <div key={product.id} className="card">
              <h2 className="product-name">{product.name}</h2>
              <p className="category">Category: {product.category}</p>
              <p className="price">Price: NPR {product.price}</p>
              <p className="discount">Discount: {product.discount}%</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilteringTaskReducer;
