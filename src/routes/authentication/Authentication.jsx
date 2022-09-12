import SignInForm from "../../components/signIn-Form/sign-in";
import SignUpForm from "../../components/signUpFrom/signUp";
import "./authentication.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
