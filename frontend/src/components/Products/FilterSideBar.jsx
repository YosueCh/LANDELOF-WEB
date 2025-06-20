import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    material: [],
    minPrice: 0,
    maxPrice: 1000,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = ["Vajillas y Cocina", "Decoración", "Baño y Accesorios"];

  const colors = [
    "Blue",
    "White",
    "Black",
    "Green",
    "Red",
    "Yellow",
    "Pink",
    "Brown",
    "Gray",
    "Turquoise",
    "Beige",
    "Navy",
  ];

  const materials = ["Losa", "Gres", "Porcelana"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      color: params.color || "",
      material: params.material ? params.material.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 1000,
    });
    setPriceRange([0, params.maxPrice || 1000]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  };

  return (
    <div className=" p-4">
      <h3 className="text-3xl  text-gray-800 mb-4 font-bebas">Filtros</h3>

      {/*Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-semibold mb-2">
          Categoria
        </label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 accent-[#e68c8c] focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-600 font-quicksand">{category}</span>
          </div>
        ))}
      </div>

      {/*Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2 font-semibold">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <label key={color} className="cursor-pointer relative">
              <input
                type="radio"
                name="color"
                value={color.toLowerCase()}
                checked={filters.color === color}
                onChange={handleFilterChange}
                className="hidden"
              />
              <div
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  filters.color === color.toLowerCase()
                    ? "border-lande-peach-2 scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
              {filters.color === color.toLowerCase() && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-lande-peach-2 rounded-full"></div>
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/*Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-semibold mb-2">
          Material
        </label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className=" mr-2 h-4 w-4 accent-[#e68c8c]"
            />
            <span className=" text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/*Price Rage Filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-semibold mb-2">
          Rango de precio
        </label>
        <input
          type="range"
          name="range"
          min={0}
          max={1000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className=" w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer  accent-lande-peach-2"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
