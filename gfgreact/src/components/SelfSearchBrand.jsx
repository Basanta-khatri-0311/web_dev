import React, { useState } from "react";

const allBrands = [
  { id: "1", brandName: "adiddas" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "adapt" },
  { id: "4", brandName: "huba" },
  { id: "5", brandName: "puma" },
];

function SelfSearchBrand() {
  const [brands, setBrands] = useState(allBrands);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue)
    const searchedBrand = allBrands.filter((brand) =>
      brand.brandName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBrands(searchedBrand);
  };
  return (
    <>
      <div>
        <input type="text" name="" id="" onChange={onSearchChange} />
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </div>
    </>
  );
}

export default SelfSearchBrand;
