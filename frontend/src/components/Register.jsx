import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { BookContext } from "../context/Book";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const { isVisible, setIsVisible } = useContext(BookContext);

  const onSubmit = (data) => {
    console.log(data);
    navigate('/')
  }

  return (
    isVisible && (<div className="bg-black/60 z-10 absolute top-0 w-full h-screen flex justify-center items-center">

      <form onSubmit={handleSubmit(onSubmit)} className="flex bg-white flex-col gap-2 px-5 py-5 rounded-md shadow-2xl w-[300px] relative">
        <h2 className="text-xl font-semibold text-orange-600">Register</h2>
        <input
          type="text"
          autoComplete="on"
          placeholder="username"
          {...register("username", { required: true })}
          className="border px-3 py-1.5 rounded-full outline-none text-gray-500 my-3"
        />
        {errors.username?.type === 'required' && <p className="text-sm text-red-600 " role="alert">username is required</p>}

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

        <button type="submit" className="block w-full bg-green-600 py-1 rounded-full text-white font-semibold">Register</button>

        <p className="text-sm mt-2 text-center">Already have an account? <Link to='/login' className="font-semibold">Login</Link></p>

        <RxCross1 className="absolute right-2 top-2 size-5 cursor-pointer" onClick={() => setIsVisible(false)} />

      </form>

    </div>
    )
  )
}

export default Register