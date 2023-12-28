import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../Store/AuthSlice";
import { Button, Input } from "./Index";
import { useDispatch } from "react-redux";
import authService from "../AppWrite/Authentication";
import { useForm } from "react-hook-form";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.isUserLogin();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full mx-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">Blog App</span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account{" "}
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center"> {error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: () => "Email Address must be valid",
                },
              })}
            />
            <Input
              label="Password:"
              placeholder="Enter your Password"
              type="password"
              {...register("password", {
                required: true,
                validate: {
                  matchPatern: () => "Email Address must be valid",
                },
              })}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default Login;
