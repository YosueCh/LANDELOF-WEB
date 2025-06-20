import { Link } from "react-router-dom";
import featured from "../../assets/images/featured.jpg";

const FeaturedCollection = () => {
  return (
    <section className=" py-16 md:pt-96 px-4 lg:pt-10 xl:px-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-stretch bg-lande-peach-ligth-2 rounded-3xl md:h-[400px]">
        {/*Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left ">
          <h2 className="text-lg font-semibold mb-2">Técnica y autenticidad</h2>
          <h2 className="text-4xl lg:text-5xl font-bebas mb-6">
            Lo handmade en tu vida diaria
          </h2>
          <p className=" text-lg text-gray-600 mb-6">
            El toque perfecto en cerámica que convierte tu hogar en una galería.
            Diseños únicos para espacios únicos
          </p>

          <Link
            to="/collections/all"
            className="bg-lande-peach-2 text-white px-6 py-3 rounded-lg text-lg hover:bg-lande-peach font-quicksand"
          >
            Comprar
          </Link>
        </div>

        {/*Right Content */}
        <div className="lg:w-1/2">
          <img src={featured} alt="Coleción Destacada"  className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
