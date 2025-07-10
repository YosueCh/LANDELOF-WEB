import { Link } from "react-router-dom";
const AdminHomePage = () => {
  const orders = [
    {
      _id: 19535,
      user: {
        name: "Ronaldo Peña Robles",
      },
      totalPrice: 350,
      status: "Entregado"
    },
    {
      _id: 15285,
      user: {
        name: "Laura Lopez Perez",
      },
      totalPrice: 180,
      status: "Cancelado"
    },
     {
      _id: 15185,
      user: {
        name: "Laura Lopez Perez",
      },
      totalPrice: 110,
      status: "En camino"
    },
     {
      _id: 815215,
      user: {
        name: "Alicia Mora Jimenez",
      },
      totalPrice: 450,
      status: "En preparación"
    },
  ];
  return <div className="max-w-7xl mx-auto p-6">
    <h1 className="text-4xl font-bebas mb-6">Panel de Administrador </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-inter">Ganacias</h2>
            <p className="text-2xl ">$1500</p>
        </div>
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-inter">Total de Ordenes</h2>
            <p className="text-2xl ">200</p>
            <Link to="/admin/orders" className="text-lande-willow hover:underline font-lato"> Gestionar Pedidos
            </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-inter">Total de Productos</h2>
            <p className="text-2xl ">60</p>
            <Link to="/admin/orders" className="text-lande-willow hover:underline font-lato"> Gestionar Productos
            </Link>
        </div>
    </div>
   
    <div className="mt-6 font-lato">
      <h2 className="text-2xl mb-4">Oredenes recientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Número de Pedido</th>
              <th className="py-3 px-4">Usuario</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Estatus</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                  <td className="p-4">{order._id}</td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">${order.totalPrice}</td>
                  <td className="p-4">{order.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No hay ordenes recientes
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>;
};

export default AdminHomePage;
