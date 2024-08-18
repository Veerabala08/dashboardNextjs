import styles from "@/app/ui/login/login.module.css";

function Login() {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1>Login</h1>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>login in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
