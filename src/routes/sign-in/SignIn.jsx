import React from "react";
import { singInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoolgeUser = async () => {
    const res = await singInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      <h1>I am sign page</h1>
      <button onClick={logGoolgeUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
