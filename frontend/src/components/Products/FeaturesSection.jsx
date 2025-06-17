
import { GiMexico } from "react-icons/gi";
import { FaTruckLoading } from "react-icons/fa";
import { FaShopLock } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center ">
        {/* Feature 1*/}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <GiMexico className="text-4xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            Llegamos a todo México
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Cerámica artesanal que viaja segura hasta tu hogar
          </p>
        </div>

        {/* Feature 2*/}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <FaTruckLoading className="text-3xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            Entrega en 3-5 días hábiles
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Recibe tu pedido más rápido que un 'click'
          </p>
        </div>

        {/* Feature 3*/}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <FaShopLock  className="text-3xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            Compras 100% seguras
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Paga con confianza
          </p>
        </div>

         {/* Feature 4*/}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <GiReceiveMoney   className="text-3xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            Envíos accesibles
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Costo fijo $99 a todo México
          </p>
        </div>


        
      </div>
    </section>
  );
};

export default FeaturesSection;
