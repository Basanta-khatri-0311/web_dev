import React, { useState } from "react";

const allBrands = [
  { id: "1", brandName: "adiddas" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "adapt" },
  { id: "4", brandName: "huba" },
  { id: "5", brandName: "puma" },
];

function App() {
  const [search, setsearch] = useState("");
  const [brands, setBrands] = useState(allBrands);

  const onInputChange = (e) => {
    setsearch(e.target.value);
    const filteredBrand = brands.filter((brand) =>
      brand.brandName.includes(search.toLowerCase())
    );
    setBrands(filteredBrand);
  };
  
  return (
    <div>
      <input type="text" onChange={onInputChange} />
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
