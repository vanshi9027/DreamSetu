import { useState } from "react";




function LoginForm() {

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [errors, setErrors] = useState({

    email: "",
    password: "",

  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };


  let validateForm = () => {
    let newerrors = {};

    if (formData.password.trim() === "") {
      newerrors.password = "Password is required";
      console.log("Password:", formData.password);

    }
    else if (formData.password.length < 8) {
      newerrors.password = " Password must be at least 8 Characters";
      console.log("Password:", formData.password);
    }

    if (formData.email.trim() === "") {
      newerrors.email = " Email is required"
      console.log("email ", formData.email);
    }


    console.log(newerrors);
    setErrors(newerrors);
    return Object.keys(newerrors).length === 0;
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    let isValid = validateForm();
    if (!isValid) {
      return;
    }
    console.log(formData);
    setFormData({
      email: "",
      password: "",

    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

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
          value={FormData.email}
          name="email"
          id="email"
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
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
          value={FormData.password}
          name="password"
          id="password"
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password}
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

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Login
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

export default LoginForm;