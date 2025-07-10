import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      name: "Andrés Landelof",
      email: "landelof@example.com",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "costumer", //Default role
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bebas mb-4">Gestion de Usuarios</h2>
    </div>
  );
};

export default UserManagement;
