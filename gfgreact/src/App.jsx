// import React, { useState } from "react";
// const allBrands = [
//   { id: "1", brandName: "adiddas" },
//   { id: "2", brandName: "nike" },
//   { id: "3", brandName: "adapt" },
//   { id: "4", brandName: "huba" },
//   { id: "5", brandName: "puma" },
// ];
// function App() {
//   const [search, setSearch] = useState("");
//   const [brands, setBrands] = useState(allBrands);

//   const onSearchChange = (e) => {
//     const input = e.target.value;
//     setSearch(input);
//     const filteredBrand = allBrands.filter((brand) =>
//       brand.brandName.toLowerCase().includes(input.toLowerCase())
//     );
//     setBrands(filteredBrand);
//   };

//   return (
//     <div>
//       <input type="text" name="" id="" onChange={onSearchChange} value={search}/>
//       <ul>
//         {brands.map((value) => (
//           <li key={value.id}>{value.brandName}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
const allBrands = [
  { id: "1", brandName: "adiddas" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "adapt" },
  { id: "4", brandName: "huba" },
  { id: "5", brandName: "puma" },
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState([]);

  const onAddToCartClick = (clickedBrand) => {
    const foundBrand = allBrands.find((value) => value.id === clickedBrand);
    if (!selectedBrand.some((b) => b.id === clickedBrand)) {
      setSelectedBrand((prev) => [...prev, foundBrand]);
    }else{
      alert("The item is already in the cart")
    }
  };

  return (
    <>
      <div>
        <h1>Our Brands</h1>
        {allBrands.map((brand) => (
          <div key={brand.id}>
            <span>{brand.brandName}</span>
            <button onClick={() => onAddToCartClick(brand.id)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        {selectedBrand.length > 0 ? (
          <div>
            <h2>Cart Products</h2>
            <ul>
              {selectedBrand.map((brand) => (
                <li key={brand.id}>{brand.brandName}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h2>No Products In Cart</h2>
        )}
      </div>
    </>
  );
}

export default App;
