import { LiaFilterSolid } from "react-icons/lia";
import { useEffect, useState, useRef } from "react";
import FilterSideBar from "../components/Products/FilterSideBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    //Close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    //Add Event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    //Clean event listenet
    document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: "1",
          name: "Taza de gato",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=1",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "2",
          name: "Taza de tortuga",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=2",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "3",
          name: "Taza de gato3",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=3",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "4",
          name: "Taza de gato4",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=4",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "5",
          name: "Taza de gato5",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=5",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "6",
          name: "Taza de gato6",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=6",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "7",
          name: "Taza de gato7",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=7",
              altText: "Taza de gato",
            },
          ],
        },
        {
          _id: "8",
          name: "Taza de gato8",
          price: 150,
          images: [
            {
              url: "http://picsum.photos/500/500?random=8",
              altText: "Taza de gato",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/*Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className=" lg:hidden border p-2 flex justify-center items-center"
      >
        <LiaFilterSolid className=" mr-2" />
        Filtros
      </button>
      {/*Filter Sidebar */}
      <div ref={sidebarRef} className={`${isSidebarOpen ? " translate-x-0" : " -translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSideBar />
      </div>
    </div>
  );
};

export default Products;
