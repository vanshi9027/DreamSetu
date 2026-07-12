import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";

function RegisterPage() {
    // return <h1>Register Page</h1>;

  return (

    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

export default RegisterPage;