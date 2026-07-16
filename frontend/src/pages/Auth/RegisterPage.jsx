import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";
import RegisterFormRHF from "../../components/auth/RegisterFormRHF"

function RegisterPage() {
    // return <h1>Register Page</h1>;

  return (

    <AuthLayout>
      <RegisterFormRHF/>
    </AuthLayout>
  );
}

export default RegisterPage;