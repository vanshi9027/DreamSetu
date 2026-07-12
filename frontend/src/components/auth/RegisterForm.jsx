import React from "react";
import {useState}from "react";

function RegisterForm() {

  let [formData , setFormData] = useState({
    fullName : "",
    email : "",
    password :"",
    confirmPassword : ""
  });

  let  [errors, setErrors] = useState({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

  let handleInputChange = (event) =>{
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setFormData((currData) =>{
      return { ...currData , [fieldName] : newValue};
    });
    
  };

  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName : "",
    email : "",
    password :"",
    confirmPassword : ""

    });
  }
  return (
    <form  onSubmit={handleSubmit}className="space-y-5">

      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Create Account
        </h2>

        <p className="text-slate-500 mt-2">
          Join DreamSetu and start your learning journey.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label  htmlFor="fullName" className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          value = {formData.fullName}
          name = "fullName"
          id="fullName"
          onChange ={handleInputChange}
          />
      </div>

      {/* Email */}
      <div>
        <label  htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            value = {formData.email}
          name = "email"
          id="email"
          onChange ={handleInputChange}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password"className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            value ={formData.password}
          name = "password"
          id="password"
          onChange ={handleInputChange}
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor= "confirmPassword" className="block mb-2 font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            value = {formData.confirmPassword}
          name = "confirmPassword"
          id="confirmPassword"
          onChange ={handleInputChange}
        />
      </div>

      {/* Button */}
      <button
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Create Account
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer font-medium">
          Login
        </span>
      </p>

    </form>
  );
}

export default RegisterForm;