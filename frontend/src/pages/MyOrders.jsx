import React, { useState, useEffect } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Simular obtencion de pedidos
    setTimeout(() => {
      const mockorders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: {
            streetName: "Del prado",
            streetNumber: "240",
            zipCode: "20286",
            city: "Aguascalientes",
            state: "Aguascalientes",
          },
          phone: "4495784135",
          orderItems: [
            {
              name: "Producto 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 200,
          isPaid: false,
        },
        {
          _id: "4567",
          createdAt: new Date(),
          shippingAddress: {
            streetName: "Guerrero",
            streetNumber: "165",
            zipCode: "25671",
            city: "Monterrey",
            country: "México",
            state: "Nuevo Leon",
      
          },
          phone: "5579861284",
          orderItems: [
            {
              name: "Producto 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 200,
          isPaid: true,
        },
      ];

      setOrders(mockorders);
    }, 1000);
  }, []);

  return (
    <div className=" max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bebas mb-6">Mis ordenes</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-200 text-sm uppercase text-gray-700 text-center">
            <tr className=" tracking-tighter">
              <th className="py-2 px-4 sm:py-3">Imagen</th>
              <th className="py-2 px-4 sm:py-3">Pedido</th>
              <th className="py-2 px-4 sm:py-3">fecha y hora </th>
              <th className="py-2 px-4 sm:py-3">Domicilio</th>
              <th className="py-2 px-4 sm:py-3">Teléfono</th>
              <th className="py-2 px-4 sm:py-3">Productos</th>
              <th className="py-2 px-4 sm:py-3">Precio</th>
              <th className="py-2 px-4 sm:py-3">Estatus</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 cursor-pointer text-center font-quicksand"
                >
                  <td className="py-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt=""
                      className=" w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-inter text-gray-800 whitespace-nowrap tracking-tighter font-semibold text-sm">
                    {order._id}
                  </td>
                  <td className=" py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.streetName} #${order.shippingAddress.streetNumber}, CP ${order.shippingAddress.zipCode}, ${order.shippingAddress.city}, ${order.shippingAddress.state}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.phone}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-quicksand`}
                    >
                      {order.isPaid ? "Pagado" : "Pendiente"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className=" py-4 text-center text-gray-500">
                  No tines pedidos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
