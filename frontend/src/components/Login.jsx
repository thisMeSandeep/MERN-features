import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/Book";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { setUser, backendUrl } = useContext(BookContext);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${backendUrl}/api/auth/login`, data, { withCredentials: true });
      const resData = response.data;
      if (resData.success) {
        setUser(resData.username);
        alert(resData.message);
        navigate('/');
      } else {
        alert(resData.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="bg-black/60 z-10 absolute top-0 w-full h-screen flex justify-center items-center">

      <form onSubmit={handleSubmit(onSubmit)} className="flex bg-white flex-col  px-5 py-5 rounded-md shadow-2xl w-[300px] relative">
        <h2 className="text-xl font-semibold text-orange-600">Sign In</h2>

        <input
          type="email"
          autoComplete="on"
          placeholder="email"
          {...register("email", { required: true })}
          className="border px-3 py-1.5 rounded-full outline-none text-gray-500 my-3"
        />
        {errors.email?.type === 'required' && <p className="text-sm text-red-600 " role="alert">email is required</p>}

        <input
          type="password"
          autoComplete="on"
          placeholder="password"
          {...register("password", { required: true })}
          className="border px-3 py-1.5 rounded-full outline-none text-gray-500 my-3"
        />
        {errors.password?.type === 'required' && <p className="text-sm text-red-600 " role="alert">password is required</p>}

        <button type="submit" className="block w-full bg-green-600 py-1 rounded-full text-white font-semibold">Sign In</button>

        <p className="text-sm mt-2 text-center"> Don't have an account? <Link to="/register" className="font-semibold">Register</Link></p>


      </form>

    </div>
  )
}

export default Login