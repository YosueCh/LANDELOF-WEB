import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";
import { FaShop } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="p-6 font-quicksand flex flex-col h-full">
      {/* Contenido superior (logo, título y menú) */}
      <div className="flex flex-col items-center">
        {/* Logo y título centrados */}
        <div className="mb-6 flex flex-col items-center w-full">
          <img
            src={logo}
            alt="Logo de la empresa"
            className="h-20 w-auto"
          />
          <h2 className="text-sm font-bold text-center uppercase tracking-tight mb-6 text-gray-500">
            Administrador
          </h2>
        </div>

        {/* Título "Menu" centrado */}
 

        {/* Navegación centrada */}
        <nav className="flex flex-col space-y-2 font-semibold w-full max-w-xs">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "bg-lande-peach-2 text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
                : "text-gray-600 hover:bg-lande-peach-ligth hover:text-white py-2 px-4 rounded flex items-center space-x-2 justify-center"
            }
          >
            <FaChalkboardTeacher size={30} />
            <span className="text-lg">Panel</span>
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "bg-lande-peach-2 text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
                : "text-gray-600 hover:bg-lande-peach-ligth hover:text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
            }
          >
            <FaUsers size={30} />
            <span className="text-lg">Usuarios</span>
          </NavLink>
          
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? "bg-lande-peach-2 text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
                : "text-gray-600 hover:bg-lande-peach-ligth hover:text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
            }
          >
            <FaBoxOpen size={30} />
            <span className="text-lg">Productos</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive
                ? "bg-lande-peach-2 text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
                : "text-gray-600 hover:bg-lande-peach-ligth hover:text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
            }
          >
            <LuPackageCheck size={30} />
            <span className="text-lg">Órdenes</span>
          </NavLink>

          <NavLink
            to="/admin/shop"
            className={({ isActive }) =>
              isActive
                ? "bg-lande-peach-2 text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
                : "text-gray-600 hover:bg-lande-peach-ligth hover:text-white py-3 px-4 rounded flex items-center space-x-2 justify-center"
            }
          >
            <FaShop size={30} />
            <span className="text-lg">Tienda</span>
          </NavLink>
        </nav>
      </div>

      {/* Botón fijo en la parte inferior */}
      <div className="mt-auto w-full max-w-xs mx-auto">
        <button
          onClick={handleLogout}
          className="w-full bg-lande-peach-ligth-2 hover:bg-lande-peach-2 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;