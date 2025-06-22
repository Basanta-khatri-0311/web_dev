import React, { useState } from "react";

const allBrands = [
  { id: "1", brandName: "adiddas" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "adapt" },
  { id: "4", brandName: "huba" },
  { id: "5", brandName: "puma" },
];

function SearchBrand() {
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState(allBrands);

  const onSearchChange = (e) => {
    const input = e.target.value;
    setSearch(input);
    const filteredBrand = allBrands.filter((brand) =>
      brand.brandName.toLowerCase().includes(input.toLowerCase())
    );
    setBrands(filteredBrand);
  };

  return (
    <div className="container">
      <h1>Search Brands</h1>
      <input
        type="text"
        className="input-box"
        onChange={onSearchChange}
        value={search}
        placeholder="Search brand..."
      />
      <ul className="brand-list">
        {brands.map((value) => (
          <li key={value.id} className="brand-item">
            {value.brandName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBrand;
