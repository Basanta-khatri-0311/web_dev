import React, { useState } from "react";
const allBrands = [
  { id: "1", brandName: "adiddas" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "adapt" },
  { id: "4", brandName: "huba" },
  { id: "5", brandName: "puma" },
];

function AddToCart() {
  const [selectedBrand, setSelectedBrand] = useState([]);

  const onAddToCartClick = (clickedBrand) => {
    const foundBrand = allBrands.find((value) => value.id === clickedBrand);
    if (!selectedBrand.some((b) => b.id === clickedBrand)) {
      setSelectedBrand((prev) => [...prev, foundBrand]);
    } else {
      alert("The item is already in the cart");
    }
  };

  return (
    <div className="container">
      <h1>Our Brands</h1>
      <ul className="brand-list">
        {allBrands.map((brand) => (
          <li key={brand.id} className="brand-item">
            {brand.brandName}
            <button
              className="button"
              onClick={() => onAddToCartClick(brand.id)}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>

      <div>
        {selectedBrand.length > 0 ? (
          <>
            <h2>Cart Products</h2>
            <ul className="cart-list">
              {selectedBrand.map((brand) => (
                <li key={brand.id} className="cart-item">
                  {brand.brandName}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2>No Products In Cart</h2>
        )}
      </div>
    </div>
  );
}

export default AddToCart;
