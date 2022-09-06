import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
    // const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
