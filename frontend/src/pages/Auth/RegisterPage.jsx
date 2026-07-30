import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";
import RegisterFormRHFB from "../../components/auth/RegisterFormRHFB"

function RegisterPage() {
    // return <h1>Register Page</h1>;

  return (

    <AuthLayout>
      <RegisterFormRHFB/>
    </AuthLayout>
  );
}

export default RegisterPage;