import MyOrders from "./MyOrders";

const Profile = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className=" flex-grow container mx-auto p-4 md:p-6">
        <div className=" flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/*Left Section*/}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
          <h1 className=" text-2xl md:text-3xl font-bebas mb-4">Yosue Chavez</h1>
          <p className=" text-sm text-gray-400 mb-4">yosue@example.com</p>
          <button className=" w-full bg-lande-peach-ligth text-white py-2 px-4 rounded hover:bg-lande-peach-2">
            Cerrar sesión
          </button>
          </div>
          {/*Right Section: Orders table*/}
          <div className=" w-full md:w-2/3 lg:w-3/4">
          <MyOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
