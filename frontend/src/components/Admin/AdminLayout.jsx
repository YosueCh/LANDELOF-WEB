import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button */}
      <div className="flex md:hidden p-4 bg-lande-orang font-lato tracking-wide text-white z-20">
        <button onClick={toggleSidebar}>
          <IoMdMenu size={24} />
        </button>
        <h1 className="ml-4 text-xl">Administrador</h1>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-white w-64 min-h-screen text-black fixed md:relative transform ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-20 md:border-r md:border-gray-200 md:bg-la`}
      >
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Orange Stripe - Only visible on md screens and larger */}
        <div className="hidden md:block h-16 bg-lande-orang w-full"></div>
        
        {/* Content Container */}
        <div className="flex-grow p-6 overflow-auto md:ml-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;