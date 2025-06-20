import decorationCollectionImage from "../../assets/images/decoration-collection.jpg";
import crockeryCollectionImage from "../../assets/images/crockery-collection.jpg";
import { Link } from "react-router-dom";
import ProductGrid from "./ProductGrid";

const CategoryCollectionSection = () => {
  const similarProduct = [
    {
      _id: "9",
      name: "Product 9",
      price: 120,
      images: [
        {
          url: "http://picsum.photos/500/500?random=9",
          altText: "Product 9",
        },
      ],
    },
    {
      _id: "10",
      name: "Product 10",
      price: 230,
      images: [
        {
          url: "http://picsum.photos/500/500?random=10",
          altText: "Product 10",
        },
      ],
    },
    {
      _id: "11",
      name: "Product 11",
      price: 179,
      images: [
        {
          url: "http://picsum.photos/500/500?random=11",
          altText: "Product 11",
        },
      ],
    },
    {
      _id: "12",
      name: "Product 12",
      price: 365,
      images: [
        {
          url: "http://picsum.photos/500/500?random=12",
          altText: "Product 12",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="text-3xl text-center font-bebas mb-4  py-8  ">
        {" "}
        Enamórate de nuestras colecciones
      </h2>
      <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Crockery collection */}
          <div className="relative flex-1 lg:px-10">
            <img
              src={crockeryCollectionImage}
              alt="Coleccion de vajillas"
              className="w-full h-[400px] object-cover object-[center_80%]"
            />
            <div className="absolute bottom-8 left-8 lg:left-20 xl:left-20 bg-white bg-opacity-90 p-4">
              <h2 className="text-lg text-gray-700">Colección de Vajillas</h2>
              <Link
                to="/collections/all?category=crockery"
                className="text-gray-700 underline text-sm font-quicksand"
              >
                Ver ahora
              </Link>
            </div>
          </div>

          {/* Decoration collection */}
          <div className="relative flex-1 lg:px-10">
            <img
              src={decorationCollectionImage}
              alt="Coleccion de decoraciones"
              className="w-full h-[400px] object-cover object-[center_80%]"
            />
            <div className="absolute bottom-8 left-8 lg:left-20 xl:left-20 bg-white bg-opacity-90 p-4">
              <h2 className="text-lg text-gray-700">Colección de Decoración</h2>
              <Link
                to="/collections/all?category=decoration"
                className="text-gray-700 underline text-sm font-quicksand"
              >
                Ver ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <h2 className="text-3xl text-center font-bebas mb-4 py-8">
          También te puede gustar
        </h2>
        <ProductGrid products={similarProduct} />
      </div>
    </>
  );
};

export default CategoryCollectionSection;
