import { userContext } from "../Context/userContext.jsx";
import { login } from "../api/user.js"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoaderIcon from "../assets/laoader.svg";

const LoginForm = () => {
    const [alert, setAlert] = useState("");
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(userContext);

    const navigate = useNavigate();

    const showAlert = (message) => {
        setAlert(message);
        setTimeout(() => {
            setAlert("");
        }, 3000)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username.length < 3 || username.length > 30) {
            showAlert("El nombre de usuario debe contener entre 3 y 30 caracteres");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,30}$/.test(password)) {
            showAlert("La contraseña debe contener\n -al menos una letra minúscula\n -al menos una mayúscula\n -al menos un número\n -una longitd entre 8 y 30 caracteres");
            return;
        }

        setLoading(true);
        const response = await login(username, password);
        setLoading(false);
        if (!response.success) {
            showAlert("Datos incorrectos");
            return;
        }

        setUser(response.data);
        navigate(-1);

    }

    return (

        <form onSubmit={handleSubmit} className="mx-auto bg-zinc-700 gap-3 w-96 h-80 p-8 rounded-xl shadow-md flex flex-col items-center relative">
            {loading ? <img src={LoaderIcon} alt="loader icon" /> : <><h2 className="text-center font-bold text-xl"  >Iniciar sesión</h2>

                <label className="block text-gray-300 text-sm font-bold" htmlFor="username">
                    Nombre de usuario
                </label>
                <input className="rounded w-full py-2 px-3 bg-gray-500 text-white placeholder-zinc-300 leading-tight focus:outline-none" id="username" name="username" type="text" placeholder="Nombre de usuario" />


                <label className="block text-gray-300 text-sm font-bold " htmlFor="password">
                    Contraseña
                </label>
                <input className=" rounded w-full py-2 px-3 bg-gray-500 text-white placeholder-zinc-300 mb-3 leading-tight focus:outline-none" id="password" name="password" type="password" placeholder="password" />


                <button className="border-2 text-white px-4 py-1 rounded-lg mt-4 border-gray-500 hover:bg-zinc-800" >
                    Iniciar sesión
                </button>

                {alert !== "" && <p className="bg-red-500 text-white font-medium p-2 absolute -bottom-32 whitespace-pre-wrap">{alert}</p>}</>}
        </form>


    );
}

export default LoginForm;