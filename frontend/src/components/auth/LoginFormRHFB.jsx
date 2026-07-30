import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

import { loginUser } from "../../services/authService";
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
        setUser(response.user);

        localStorage.setItem("token", response.token);

        navigate("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      setApiError(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <Card className="shadow border-0 p-4">
      <Card.Body>
        <h2 className="fw-bold mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-muted mb-4">
          Login to continue your DreamSetu journey.
        </p>

        <Form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Enter your password"
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

          <div className="d-flex justify-content-end mb-3">
            <Button variant="link" className="p-0">
              Forgot Password?
            </Button>
          </div>

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
            {loading ? "Signing In..." : "Login"}
          </Button>

          <p className="text-center text-muted mt-4 mb-0">
            Don't have an account?{" "}
            <span
              className="text-primary fw-semibold"
              style={{ cursor: "pointer" }}
            >
              Register
            </span>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
}