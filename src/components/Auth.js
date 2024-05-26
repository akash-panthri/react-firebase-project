import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin =async () => {
    await createUserWithEmailAndPassword(auth, email, password)
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
    </div>
  );
}
