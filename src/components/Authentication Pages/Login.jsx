import { SignIn } from "@clerk/clerk-react";

const Login = () => (
  <div className="w-full flex justify-center items-center">
    <SignIn
      path="/login"
      routing="/login"
      signUpUrl="/signup"
      afterSignInUrl="/dashboard"
    />
  </div>
);

export default Login;
