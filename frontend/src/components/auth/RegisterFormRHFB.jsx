import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";

import { registerUser } from "../../services/authService";

export default function RegisterFormRHF() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setApiError("");

    try {
      setLoading(true);

      const response = await registerUser(data);

      if (response.message) {
        alert(response.message);
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      setApiError(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <Card className="shadow border-0 p-4">
      <Card.Body>
        <h2 className="fw-bold mb-2">
          Create Account
        </h2>

        <p className="text-muted mb-4">
          Join DreamSetu and start your learning journey.
        </p>

        <Form onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
              })}
            />

            {errors.fullName && (
              <div className="text-danger mt-1">
                {errors.fullName.message}
              </div>
            )}
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <div className="text-danger mt-1">
                {errors.email.message}
              </div>
            )}
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            {errors.password && (
              <div className="text-danger mt-1">
                {errors.password.message}
              </div>
            )}
          </Form.Group>

          {/* Confirm Password */}
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <div className="text-danger mt-1">
                {errors.confirmPassword.message}
              </div>
            )}
          </Form.Group>

          {apiError && (
            <Alert variant="danger">
              {apiError}
            </Alert>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          <p className="text-center text-muted mt-4 mb-0">
            Already have an account?{" "}
            <span
              className="text-primary fw-semibold"
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </p>

        </Form>
      </Card.Body>
    </Card>
  );
}