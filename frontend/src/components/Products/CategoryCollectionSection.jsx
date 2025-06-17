import decorationCollectionImage from "../../assets/images/decoration-collection.jpg";
import crockeryCollectionImage from "../../assets/images/crockery-collection.jpg";
import { Link } from "react-router-dom";

const CategoryCollectionSection = () => {
  return (
    <section className=" py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/*Crockery collection */}
        <div className="relative flex-1 lg:px-10">
          <img
            src={crockeryCollectionImage}
            alt="Coleccion de vajillas"
            className="w-full h-[400px] object-cover object-[center_80%] "
          />
          <div className=" absolute bottom-8 left-8 lg:left-20 xl:left-20 bg-white bg-opacity-90 p-4  ">
            <h2 className="text-lg  text-gray-700  ">
               Colección de Vajillas
            </h2>
            <Link
              to="/collections/all?category=crockery"
              className="text-gray-700 underline text-sm font-quicksand"
            >
              Ver ahora
            </Link>
          </div>
        </div>

        {/*Decoration collection */}
        <div className="relative flex-1 lg:px-10 ">
          <img
            src={decorationCollectionImage}
            alt="Coleccion de decoraciones"
            className="w-full h-[400px] object-cover object-[center_80%] "
          />
          <div className=" absolute bottom-8 left-8 llg:left-20 xl:left-20 bg-white bg-opacity-90 p-4  ">
            <h2 className="text-lg  text-gray-700  ">
               Colección de Decoración
            </h2>
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
  );
};

export default CategoryCollectionSection;
