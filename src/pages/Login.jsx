import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div
      className="h-[100vh] w-full bg-white relative 
      before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
      before:bg-[size:20px_20px]"
    >
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
