import React from "react";
import { useForm } from "react-hook-form";


export default function RegisterFormRHF() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const password = watch("password");
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
                <label htmlFor="fullName" className="block mb-2 font-medium">
                    Full Name
                </label>

                <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

                    name="fullName"
                    id="fullName"
                    {...register("fullName", {
                        required: "Full Name is required",
                        minLength: 3,
                    })}


                />

                {/* error show in form using reatc hook form */}
                {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                    </p>
                )}


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
                    placeholder="Enter password"
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

            {/* Confirm Password */}
            <div>
                <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                    Confirm Password
                </label>

                <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) => {
                            return value === password || "Passwords do not match";
                        }
                    })}

                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                    </p>
                )}

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


