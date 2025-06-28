import React, { useState, useEffect, useRef } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const fetchedIds = useRef(new Set()); 

  useEffect(() => {
    const fetchProduct = async () => {
      if (count === 0 || fetchedIds.current.has(count)) return;

      try {
        const res = await fetch(`https://dummyjson.com/products/${count}`);
        const data = await res.json();
        setProducts((prev) => [...prev, data]);
        fetchedIds.current.add(count); 
      } catch (error) {
        console.error("Error fetching product:", error);
        
      }
    };

    fetchProduct();
  }, [count]);

  const handleAddProduct = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <button className="add-btn" onClick={handleAddProduct}>
        Add Product
      </button>
      <h2 className="heading">Product List</h2>
      <ul className="product-list">
        {products.map((item) => (
          <li key={item.id} className="product-card">
            <p>{item.title}</p>
            <img src={item.images[0]} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;
