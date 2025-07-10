import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/images/register.jpg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario Registrado:", {
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg  border border-lande-peach-ligth-2 shadow-xl min-h-[500px] flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bebas text-center mb-2">
            Crear una cuenta
          </h2>
          <p className="text-center mb-6 font-quicksand tracking-tighter text-sm text-gray-500 ">
            ¡Empecemos! Por favor, ingresa tus datos
          </p>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2">Nombre</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full text-sm p-2 border rounded tracking-tighter font-quicksand"
                placeholder="Nombre"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2">
                Apellido
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full text-sm p-2 border rounded tracking-tighter font-quicksand"
                placeholder="Apellido"
              />
            </div>
          </div>

          <div className="mb-4 ">
            <label className="block text-sm font-semibold mb-2 ">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-sm p-2 border rounded tracking-tighter font-quicksand"
              placeholder="Correo electrónico "
            />
          </div>

          <div className="mb-12">
            <label className="block text-sm font-semibold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-sm p-2 border rounded tracking-tighter font-quicksand"
              placeholder="Contraseña "
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lande-peach-ligth text-white p-4 rounded-lg font-quicksand hover:bg-lande-peach transition uppercase"
          >
            Crear cuenta
          </button>
          <p className="mt-6 text-center text-sm">
            ¿Ya tienes una cuenta?
            <Link
              to="/login"
              className="text-lande-orang underline pl-2 uppercase"
            >
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2  bg-lande-peach-2">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Crear cuenta"
            className="h-[750px] w-full object-cover object-[5%_90%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
