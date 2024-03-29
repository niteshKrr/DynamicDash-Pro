"use client";

import { authenticate } from "../../../lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1 className="text-xl">Login</h1>
      <input type="text" placeholder="username = nitesh_kr" name="username" />
      <input type="password" placeholder="password = 12345" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;