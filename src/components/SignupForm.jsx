import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoaderIcon from "../assets/laoader.svg";
import { useUserContext } from "../Context/userContext.jsx";

import { signup } from "../api/user";
import SignupSuccess from "./SignupSuccess";

export default function SignupForm() {
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupSuccesfully, setSignupSuccessfully] = useState(false);

  const { user } = useUserContext();
  const navigate = useNavigate();

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

    console.log(email, " ", password, " ", username);

    if (username.length < 3 || username.length > 30) {
      showAlert("El nombre de usuario debe contener entre 3 y 30 caracteres");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/i.test(email)) {
      showAlert("El email no tiene un formato válido");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,30}$/.test(password)) {
      showAlert(
        "La contraseña debe contener\n -al menos una letra minúscula\n -al menos una mayúscula\n -al menos un número\n -una longitd entre 8 y 30 caracteres"
      );
      return;
    }

    setLoading(true);
    const response = await signup(username, password, email);
    console.log(response);
    setLoading(false);
    if (!response.success) {
      if (response.message.includes("email")) {
        showAlert("El email ya está en uso");
        return;
      } else if (response.message.includes("username")) {
        showAlert("El nombre de usuario ya está en uso");
        return;
      }
      showAlert("Datos incorrectos");
      return;
    }

    setSignupSuccessfully(true);
    setTimeout(() => {
      navigate("/", { state: { confirmacion: true } });
    }, 3000);
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, []);

  if (signupSuccesfully) {
    return <SignupSuccess />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-zinc-700 gap-3 w-96 h-96 p-6 rounded-xl shadow-md flex flex-col items-center relative"
    >
      {loading ? (
        <img src={LoaderIcon} alt="loader icon" />
      ) : (
        <>
          <h2 className="text-center font-bold text-xl">Crear cuenta</h2>

          <label
            className="block text-gray-300 text-sm font-bold"
            htmlFor="username"
          >
            Nombre de usuario
          </label>
          <input
            className="rounded w-full py-2 px-3 bg-gray-500 text-white placeholder-zinc-300 leading-tight focus:outline-none"
            id="username"
            name="username"
            type="text"
            placeholder="Nombre de usuario"
          />

          <label
            className="block text-gray-300 text-sm font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded w-full py-2 px-3 bg-gray-500 text-white placeholder-zinc-300 leading-tight focus:outline-none"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />

          <label
            className="block text-gray-300 text-sm font-bold "
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className=" rounded w-full py-2 px-3 bg-gray-500 text-white placeholder-zinc-300 mb-3 leading-tight focus:outline-none"
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />

          <button className="border-2 text-white px-4 py-1 rounded-lg mt-4 border-gray-500 hover:bg-zinc-800">
            Crear cuenta
          </button>

          {alert !== "" && (
            <p className="bg-red-500 text-white font-medium p-2 absolute -bottom-32 whitespace-pre-wrap">
              {alert}
            </p>
          )}
        </>
      )}
    </form>
  );
}
