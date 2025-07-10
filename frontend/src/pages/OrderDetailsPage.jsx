import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  const getStatusColor = (status) => {
    if (status.isCanceled) return "bg-red-100 text-red-800";
    if (status.isDelivered) return "bg-purple-100 text-purple-800";
    if (status.isInComing) return "bg-orange-100 text-orange-800";
    if (status.isPreparing) return "bg-blue-100 text-blue-800";
    if (status.isPaid) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  const getStatusText = (status) => {
    if (status.isCanceled) return "Cancelado";
    if (status.isDelivered) return "Entregado";
    if (status.isInComing) return "En camino";
    if (status.isPreparing) return "En preparación";
    if (status.isPaid) return "Aprobado";
    return "Procesando";
  };

  const getPaymentStatus = (isPaid) => {
    return isPaid
      ? { text: "Pagado", color: "text-green-600" }
      : { text: "Pendiente", color: "text-red-600" };
  };

  const translateColor = (color) => {
    const colorsMap = {
      red: "Rojo",
      blue: "Azul",
      green: "Verde",
      yellow: "Amarillo",
      black: "Negro",
      white: "Blanco",
      gray: "Gris",
      purple: "Porado",
      pink: "Rosa",
      orange: "Naranja",
    };
    return colorsMap[color.toLowerCase()] || color;
  };

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      status: {
        isPaid: false,
        isPreparing: false,
        isInComing: false,
        isDelivered: false,
        isCanceled: false,
      },
      paymentMethod: "Paypal",
      shippingmethod: "Estándar",
      shippingAddress: {
        streetName: "Campeche",
        streetNumber: "208",
        interiorNumber: "",
        neighborhood: "Rigo",
        zipCode: "94295",
        municipality: "",
        city: "Boca del Río",
        state: "Veracruz",
        phone: "6548952165",
      },
      orderItems: [
        {
          productId: "1",
          name: "Taza de dinosaurio",
          price: 200,
          quantity: 3,
          color: "red",
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Taza de Zorro",
          price: 250,
          quantity: 1,
          color: "blue",
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!orderDetails ? (
        <p>Cargando detalles...</p>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          {/* Header compacto */}
          <div className="bg-gray-50 p-4 flex justify-between items-center border-b">
            <h2 className="text-2xl font-bebas">Orden #{id}</h2>
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-500">
                Fecha: {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(orderDetails.status)}`}>
                {getStatusText(orderDetails.status)}
              </span>
            </div>
          </div>

          {/* Información en 3 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 text-sm border-b">
            <div>
              <h3 className="font-semibold text-gray-500 mb-1">FORMA DE PAGO</h3>
              <p className="font-quicksand">{orderDetails.paymentMethod}</p>
              <p className={`${getPaymentStatus(orderDetails.status.isPaid).color} font-medium`}>
                {getPaymentStatus(orderDetails.status.isPaid).text}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-500 mb-1">ENVÍO</h3>
              <p className="font-quicksand">{orderDetails.shippingmethod}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-500 mb-1">DIRECCIÓN</h3>
              <div className="font-quicksand space-y-1">
                <p className="truncate">
                  {orderDetails.shippingAddress.streetName}{" #"}
                  {orderDetails.shippingAddress.streetNumber}
                  {orderDetails.shippingAddress.interiorNumber && ` Int. ${orderDetails.shippingAddress.interiorNumber}`}
                </p>
                {orderDetails.shippingAddress.neighborhood && (
                  <p className="truncate">Col. {orderDetails.shippingAddress.neighborhood}</p>
                )}
                <p className="truncate">
                  CP {orderDetails.shippingAddress.zipCode}
                  {orderDetails.shippingAddress.municipality && `, ${orderDetails.shippingAddress.municipality}`}
                </p>
                <p className="truncate">
                  {orderDetails.shippingAddress.city},{" "}
                  {orderDetails.shippingAddress.state}
                </p>
                <p className="truncate">Tel: {orderDetails.shippingAddress.phone}</p>
              </div>
            </div>
          </div>

          {/* Productos compactos */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              PRODUCTOS
            </h3>
            <div className="space-y-2">
              {orderDetails.orderItems.map((item) => (
                <Link
                  to={`/product/${item.productId}`}
                  key={item.productId}
                  className="flex items-center justify-between text-sm hover:bg-gray-50 transition-colors p-2 rounded"
                >
                  <div className="flex items-center min-w-0 flex-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 lg:w-48 lg:h-48 object-cover rounded mr-2 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 font-latot">
                      <p className="font-semibold lg:text-xl">{item.name}</p>
                      <p className="text-gray-500 text-xs lg:text">
                        Cantidad: {item.quantity}
                      </p>
                      <p className="text-gray-500 text-xs capitalize">
                        Color: {translateColor(item.color)}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2 text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Total compacto */}
          <div className="bg-gray-50 px-4 py-3 flex justify-between items-center text-sm">
            <span className="text-gray-500">Total del pedido:</span>
            <span className="font-semibold">
              $
              {orderDetails.orderItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      )}
      <div className="mt-6 text-left">
        <Link
          to="/my-orders"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-lato text-gray-700 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lande-orange"
        >
          <FiArrowLeft className="mr-2" />
          Mis pedidos
        </Link>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
