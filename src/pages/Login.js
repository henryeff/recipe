import { useState } from "react";
import styles from "./Login.module.css";

function Login({ setIsLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handlerChangeCredentials = (event) => {
    setCredentials((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handlerSubmitCredentials = (event) => {
    event.preventDefault();
    setIsLogin(true);
    alert(`Welcome back ${credentials.username}`);
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginHeader}>LOGIN</h2>
      <form onSubmit={handlerSubmitCredentials}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username</label>
          <input
            name="username"
            value={credentials.username}
            onChange={handlerChangeCredentials}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            name="password"
            value={credentials.password}
            onChange={handlerChangeCredentials}
            className={styles.inputField}
            type="password"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
