import React, { useState } from "react";
const allBrands = [
  { id: "1", brandName: "adiddas" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "adapt" },
  { id: "4", brandName: "huba" },
  { id: "5", brandName: "puma" },
];

function SelfAddToCart() {
  const [cartBrands, setCartBrands] = useState([]);
  const onAddToCartClicked = (brand) => {
    if (!cartBrands.some((b) => b.id === brand.id)) {
      setCartBrands((prev) => [...prev, brand]);
    } else {
      alert(`${brand.brandName} is already in cart`);
    }
  };

  const onRemoveClicked = (brandId) => {
    setCartBrands(cartBrands.filter((brand) => brand.id !== brandId));
  };

  return (
    <div>
      {allBrands.map((brand) => (
        <div key={brand.id}>
          <span>{brand.brandName} - </span>
          <button onClick={() => onAddToCartClicked(brand)}>Add to Cart</button>
        </div>
      ))}
      <div>
        {cartBrands.length > 0 ? (
          <>
            <p>Cart Products</p>
            {cartBrands.map((brand) => (
              <div key={brand.id}>
                <span>{brand.brandName}</span>
                <button onClick={() => onRemoveClicked(brand.id)}>
                  Remove Brand
                </button>
              </div>
            ))}
          </>
        ) : (
          <p>No cart Products Yet</p>
        )}
      </div>
    </div>
  );
}

export default SelfAddToCart;
