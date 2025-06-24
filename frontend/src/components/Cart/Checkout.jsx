import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      productId: 1,
      name: "Taza",
      color: "Red",
      quantity: 2,
      price: 50,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: 2,
      name: "Plato",
      color: "Azul",
      quantity: 1,
      price: 80,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 130,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    streetName: "",
    streetNumber: "",
    interiorNumber: "",
    neighborhood: "",
    zipCode: "",
    municipality: "",
    city: "",
    state: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Pago aprovado", details);
    navigate ("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/*Left Section */}
      <div className=" bg-white rounded-lg p-6">
        <h2 className=" text-3xl uppercase mb-6 font-bebas">Carrito</h2>

        <form onSubmit={handleCreateCheckout}>
          <h3 className=" text-lg mb-4 font-lato">Detalles de Contacto</h3>
          <div className=" mb-4">
            <label className=" block text-gray-700 font-quicksand">
              Email*
            </label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded font-quicksand"
              disabled
            />
          </div>

          <h3 className=" text-lg mb-4 font-lato">Datos de envío</h3>

          {/* Nombre y Apellido */}
          <div className=" mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className=" block text-gray-700 font-quicksand">
                Nombres*
              </label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded font-quicksand"
                required
                minLength="2"
              ></input>
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                Apellidos*
              </label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded font-quicksand"
                required
                minLength="2"
              ></input>
            </div>
          </div>

          {/* Dirección - Parte 1 */}
          <div className=" mb-4 grid grid-cols-3 gap-4 ">
            <div>
              <label className=" block text-gray-700 font-quicksand">
                Estado*
              </label>
              <input
                type="text"
                value={shippingAddress.state}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    state: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
                required
              />
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                Municipio/Alcaldía*
              </label>
              <input
                type="text"
                value={shippingAddress.municipality}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    municipality: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
                required
              />
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                Colonia*
              </label>
              <input
                type="text"
                value={shippingAddress.neighborhood}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    neighborhood: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
                required
              />
            </div>
          </div>

          {/* Dirección - Parte 2 */}
          <div className=" mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className=" block text-gray-700 font-quicksand">
                Ciudad
              </label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded font-quicksand"
              ></input>
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                Calle*
              </label>
              <input
                type="text"
                value={shippingAddress.streetName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    streetName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded font-quicksand"
                required
              ></input>
            </div>
          </div>

          {/* Dirección - Parte 3 */}
          <div className=" mb-4 grid grid-cols-4  gap-4 ">
            <div>
              <label className=" block text-gray-700 font-quicksand">
                No. Exterior*
              </label>
              <input
                type="text"
                value={shippingAddress.streetNumber}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    streetNumber: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
                required
              />
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                No. Interior
              </label>
              <input
                type="text"
                value={shippingAddress.interiorNumber}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    interiorNumber: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
              />
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                Código Postal*
              </label>
              <input
                type="text"
                value={shippingAddress.zipCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    zipCode: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
                required
                maxLength="5"
                pattern="[0-9]{5}"
              />
            </div>

            <div>
              <label className=" block text-gray-700 font-quicksand">
                Teléfono*
              </label>
              <input
                type="tel"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className=" w-full p-2 border rounded font-quicksand"
                required
                maxLength="10"
                pattern="[0-9]{10}"
              />
            </div>
          </div>
          
         <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-lande-peach"
              >
                Proceder a Pago
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pagar con PayPal</h3>
                <PaypalButton
                  amount={cart.totalPrice} // Usa el total del carrito
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Pago Fallido. Vuelve a intentarlo")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
