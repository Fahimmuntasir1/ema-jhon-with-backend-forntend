import auth from "../../firebase.init";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link,useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };

if (user) {
  navigate("/")
}

  const handleCreateUser = (event) => {
    event.preventDefault();
    setError(event.target.value);
    if (password !== confirmPass) {
      setError("Password Didn't Match");
      return;
    }
    if (password.length < 6) {
      setError("password should be 6 character or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  
  return (
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>
      <form onSubmit={handleCreateUser}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} type="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            onBlur={handleConfirmPassBlur}
            type="password"
            name="password"
            required
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <input type="submit" value="Sign Up" className="form-submit" />
      </form>
      <p className="signup-link">
        Already have an account?{" "}
        <Link className="form-link" to="/login">
          Log In here
        </Link>
      </p>
      <div className="horizontal-divider">
        <div className="line-left" />
        <p>or</p>
        <div className="line-right" />
      </div>
      <div className="input-wrapper">
        <button className="google-auth">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1443 21.8798 21.2395 23.1864L21.2128 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
              fill="#4285F4"
            />
            <path
              d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
              fill="#34A853"
            />
            <path
              d="M8.16007 18.769C7.85848 17.8979 7.68395 16.9645 7.68395 16.0001C7.68395 15.0356 7.85849 14.1023 8.1442 13.2312L8.13621 13.0456L3.67126 9.64746L3.52518 9.71556C2.55696 11.6134 2.0014 13.7445 2.0014 16.0001C2.0014 18.2556 2.55696 20.3867 3.52518 22.2845L8.16007 18.769Z"
              fill="#FBBC05"
            />
            <path
              d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
              fill="#EB4335"
            />
          </svg>
          <p> Continue with Google </p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
