import { GrSend } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" border-t pt-12">
      <div className="px-20 md:px-4 pb-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 bg-white">
          <div>
            <h3 className=" text-lande-amber mb-4 font-lato text-base uppercase ">
              Boletin de Ofertas
            </h3>
            <p className="text-lande-amber mb-4 font-quicksand text-xs">
              {" "}
              ¡Sé el primero en enterarte de nuestros nuevos productos!
            </p>
            <p className="text-lande-amber font-quicksand text-sm mb-2">
              Suscríbete{" "}
            </p>

            {/*Newsletter form */}
            <form className="flex ">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className=" p-3 w-full text-sm border-t border-l border-b border-lande-peach-ligth rounded-l-md focus:outline-none focus:ring-2 focus:ring-lande-peach-ligth transition-all"
                required
              />
              <button
                type="submit"
                className="bg-lande-peach-ligth text-white hover:bg-lande-peach-2 hover:text-lande-peach-ligth-2 py-2 px-3 rounded-r-md transition-all"
              >
                <GrSend className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/*Shop links */}
          <div>
            <h3 className=" text-lande-amber mb-4 font-lato text-base uppercase ">
              Categorias
            </h3>
            <ul className="space-y-2 text-lande-amber font-quicksand ">
              <li>
                <Link
                  to="#"
                  className="hover:text-lande-peach transition-colors"
                >
                  Vajilla y Utensilios{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lande-peach transition-colors"
                >
                  Hogar y Decoración{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lande-peach transition-colors"
                >
                  Baño y Accesorios:
                </Link>
              </li>
            </ul>
          </div>

          {/*Suport Links */}
          <div>
            <h3 className=" text-lande-amber mb-4 font-lato text-base uppercase ">
              Ayuda
            </h3>
            <ul className="space-y-2 text-lande-amber font-quicksand ">
              <li>
                <Link
                  to="#"
                  className="hover:text-lande-peach transition-colors"
                >
                  Contáctanos{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lande-peach transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-lande-peach transition-colors"
                >
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
          {/*Follow section */}
          <div>
            <h3 className=" text-lande-amber mb-4 font-lato text-base uppercase ">
              Sígenos
            </h3>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.facebook.com/"
                target="blank"
                rel="noopener noreferrer "
                className=" text-lande-amber hover:text-lande-peach-2"
              >
                <FaFacebookSquare className="h-6 w-5 " />
              </a>
              <a
                href="https://www.facebook.com/"
                target="blank"
                rel="noopener noreferrer "
                className=" text-lande-amber hover:text-lande-peach-2"
              >
                <RiInstagramFill className="h-6 w-6" />
              </a>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      {/*Terms and conditions */}
      <div className="bg-lande-peach-ligth-2 py-3 text-center w-full text-lande-amber font-quicksand text-xs">
        <p>
          <Link to="#" className="hover:underline ml-2">
            Términos y Condiciones
          </Link>{" "}
          |
          <Link to="#" className="hover:underline ml-2">
            Política de Privacidad
          </Link>
        </p>
        <p className="">
          © {new Date().getFullYear()}, Landelof Ceramics. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
