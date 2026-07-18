import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function LoginFormRHF() {

  const [apiError, setApiError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setApiError("");
    try {
      setLoading(true);
      const response = await loginUser(data);

      if (response.message) {
        //Save Logged-in User in AuthContext
        setUser(response.user);
        //Save JWT Token
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      }
    }
    catch (error) {
      setLoading(false);
      setApiError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="text-slate-500 mt-2">
          Login to continue your DreamSetu journey.
        </p>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

          name="email"
          id="email"
          {...register("email", {

            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",

            },
          })}

        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

          name="password"
          id="password"

          {...register("password", {
            required: "Password is required",

            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      {apiError && (
        <p className="text-red-600 text-sm mt-2">
          {apiError}
        </p>
      )}
      {/* Login Button */}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        disabled={loading} >
        {loading ? "Signing In..." : "Login"}
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <span className="text-blue-600 cursor-pointer font-medium">
          Register
        </span>
      </p>

    </form>
  );
}
