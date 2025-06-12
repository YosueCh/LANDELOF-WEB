import { Link } from "react-router-dom";
import heroImg from "../../assets/images/heroImg.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-[250px] md:h-[600px] lg:h-[750px] object-cover object-[center_70%]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className=" text-4xl md:text-9xl font-bebas tracking-tighter uppercase mb-4">
            Diseño en cerámica <br /> hechas a mano
          </h1>
          <p className="text-sm tracking-wide md:text-lg mb-6 font-lato">
            Selección artesanal que llega a tu hogar
          </p>
          <Link
            to="#"
            className="text-white px-6 py-1 rounded-none font-quicksand text-lg tracking-wide 
           hover:bg-lande-peach-ligth hover:bg-opacity-50 transition-colors duration-300 
           border-2 border-x-lande-peach-ligth-2 shadow-md hover:shadow-lg 
           transform hover:-translate-y-1"
          >
            Ver colección
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
