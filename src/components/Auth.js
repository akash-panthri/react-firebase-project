import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin =async () => {
    try {
        
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
    }
  };
  const signinWithGoogle =async () => {
    try {
        
        await signInWithPopup(auth, googleProvider)
    } catch (error) {
        console.error(error)
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
      />
      <input
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={signin} > Sign In</button>
      <button onClick={signinWithGoogle}> Sign In With Google</button>
      <button onClick={logout}> Logout </button>
    </div>
  );
}
