import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Función para determinar el color del estatus (consistente con OrderDetailsPage)
  const getStatusColor = (status) => {
    if (status.isCanceled) return "bg-red-100 text-red-800";
    if (status.isDelivered) return "bg-purple-100 text-purple-800";
    if (status.isInComing) return "bg-orange-100 text-orange-800";
    if (status.isPreparing) return "bg-blue-100 text-blue-800";
    if (status.isPaid) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  // Función para determinar el texto del estatus
  const getStatusText = (status) => {
    if (status.isCanceled) return "Cancelado";
    if (status.isDelivered) return "Entregado";
    if (status.isInComing) return "En camino";
    if (status.isPreparing) return "En preparación";
    if (status.isPaid) return "Pagado";
    return "Procesando";
  };

  useEffect(() => {
    // Simulación de obtención de pedidos con más estados
    setTimeout(() => {
      const mockOrders = [
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
          status: {
            isPaid: false,
            isPreparing: false,
            isInComing: false,
            isDelivered: false,
            isCanceled: false,
          },
        },
        {
          _id: "4567",
          createdAt: new Date(),
          shippingAddress: {
            streetName: "Guerrero",
            streetNumber: "165",
            zipCode: "25671",
            city: "Monterrey",
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
          status: {
            isPaid: true,
            isPreparing: true,
            isInComing: false,
            isDelivered: false,
            isCanceled: false,
          },
        },
        {
          _id: "8910",
          createdAt: new Date(),
          shippingAddress: {
            streetName: "Reforma",
            streetNumber: "500",
            zipCode: "06500",
            city: "CDMX",
            state: "Ciudad de México",
          },
          phone: "5551234567",
          orderItems: [
            {
              name: "Producto 3",
              image: "https://picsum.photos/500/500?random=3",
            },
          ],
          totalPrice: 350,
          status: {
            isPaid: true,
            isPreparing: false,
            isInComing: true,
            isDelivered: false,
            isCanceled: false,
          },
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bebas mb-6">Mis órdenes</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-200 text-sm uppercase text-gray-700 text-center">
            <tr className="tracking-tighter">
              <th className="py-2 px-4 sm:py-3">Imagen</th>
              <th className="py-2 px-4 sm:py-3">Pedido</th>
              <th className="py-2 px-4 sm:py-3">Fecha y hora</th>
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
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:bg-gray-50 cursor-pointer text-center font-quicksand"
                >
                  <td className="py-2 sm:py-4 sm:px-4">
                    <Link to={`/order/${order._id}`}>
                      <img
                        src={order.orderItems[0].image}
                        alt=""
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                      />
                    </Link>
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-inter text-gray-800 whitespace-nowrap tracking-tighter font-semibold text-sm">
                    #{" "}
                    <Link
                      to={`/order/${order._id}`}
                      className="hover:text-lande-orange"
                    >
                      {order._id}
                    </Link>
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm">
                    {order.shippingAddress
                      ? `${order.shippingAddress.streetName} #${order.shippingAddress.streetNumber}, CP ${order.shippingAddress.zipCode}, ${order.shippingAddress.state}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">{order.phone}</td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 whitespace-nowrap">
                    <span
                      className={`${getStatusColor(
                        order.status
                      )} px-2 py-1 rounded-full text-xs font-medium tracking-tight inline-flex items-center`}
                      style={{ minWidth: "fit-content" }}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-4 text-center text-gray-500">
                  No tienes pedidos
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
