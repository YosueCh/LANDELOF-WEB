import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/images/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg  border border-lande-peach-ligth-2 shadow-xl min-h-[500px] flex flex-col justify-center">
          <h2 className="text-3xl font-bebas text-center mb-2">Login</h2>
          <p className="text-center mb-6 font-quicksand tracking-tighter text-sm text-gray-500 ">
            ¡Bienvenido! Introduce tu email y contraseña para continuar.
          </p>

          <div className="mb-4 ">
            <label className="block text-sm font-semibold mb-2 ">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-sm p-2 border rounded tracking-tighter font-quicksand"
              placeholder="Ingresa tu correo electrónico "
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
            className="w-full bg-lande-peach-ligth text-white p-4 rounded-lg font-quicksand hover:bg-lande-peach transition"
          >
            Inicia sesión
          </button>
          <p className="mt-6 text-center text-sm">
            ¿No tienes una cuenta? 
            <Link to="/register" className="text-lande-orang underline pl-2">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2  bg-lande-peach-2">
        <div className="h-full flex flex-col justify-center items-center">
            <img src={login} alt="Inicio de Sesón" className="h-[750px] w-full object-cover object-[center_90%] " />
        </div>
      </div>
    </div>
  );
};

export default Login;
