import styles from "./login.module.scss";
import { Box, Typography, TextField, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signout } from "../../features/userSlice";
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../api/firebase-config";

export default function Login() {
  let { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserChange = (e) => {
    let { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleClear = () => {
    setUserLogin({
      email: "",
      password: "",
    });
  };

  const handleLoginSubmit = async (e) => {
    let userCredentials = {
      email: userLogin.email,
      password: userLogin.password,
    };

    try {
      e.preventDefault();
      let result = await axios.post(
        "http://localhost:8080/users/login",
        userCredentials,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!result.data.boolean) {
        alert(result.data.message);
      } else {
        let userResponse = result.data.user;
        dispatch(login({ ...userResponse }));
        alert("login successful");
        navigate("/businesses");
        handleClear();
      }
    } catch (error) {
      console.error({ error: error });
    }
  };

  // const handleGoogleLogin = async (e) => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     let googleUserLogin = await signInWithPopup(auth, provider).then(
  //       async (result) => {
  //         return result.user;
  //       }
  //     );

  //     let result = await axios.post("http://localhost:8080/users/googleLogin", {
  //       email: googleUserLogin.email,
  //       googleID: googleUserLogin.uid,
  //     });

  //     if (!result.data.boolean) {
  //       alert(result.data.message);
  //     } else {
  //       let userResponse = result.data.user;
  //       dispatch(login({ ...userResponse }));
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.error({ message: error });
  //   }
  // };

  return (
    <div className={styles.loginMainDiv}>
      <div className={styles.loginFunctionalityParentDiv}>
        <img className={styles.logo} src="/" alt="mylogo" />
        <div className={styles.loginFunctionalityDiv}>
          <div className={styles.loginFunctionalityHeader}>
            <Typography variant="P" sx={{ fontWeight: 600, fontSize: "2vw" }}>
              Get Started Now
            </Typography>
            <Typography variant="p" sx={{ fontSize: "1.25vw" }}>
              Helping the world by tipping made easy.
            </Typography>
          </div>
          <div className={styles.authenticationDiv}>
            {/* <Button
              sx={{
                backgroundColor: "white",
                border: "1px solid #ECEDE9",
                padding: "1em",
                color: "black",
                display: "flex",
                gap: "1em",
              }}
              onClick={handleGoogleLogin}
            >
              <img src="\public\images\google_icon.png" />
              <Typography>
                Sign In With <strong>Google</strong>
              </Typography>
            </Button> */}
          </div>
          <div>
            <Divider>or</Divider>
          </div>

          <div className={styles.signInForm}>
            <div className={styles.signInFormInputDiv}>
              <p className={styles.signInFormInputLabel}>Email</p>
              <input
                className={styles.signInFormInputText}
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => handleUserChange(e)}
              />
            </div>
            <div className={styles.signInFormInputDiv}>
              <p className={styles.signInFormInputLabel}>Password</p>
              <input
                className={styles.signInFormInputText}
                type="text"
                placeholder="Password"
                name="password"
                onChange={(e) => handleUserChange(e)}
              />
            </div>

            <div className={styles.signInOptions}>
              <div className={styles.signInOptionOne}>
                <Typography>_</Typography>
                <Typography>Remember me</Typography>
              </div>
              <div>
                <a href="/">
                  <Typography>Forgot password?</Typography>
                </a>
              </div>
            </div>
            <Button
              sx={{
                padding: ".5em 0",
                fontSize: "1vw",
                borderRadius: "10px",
                fontWeight: "600",
              }}
              variant="contained"
              fullWidth
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </div>
          <div className={styles.signUp}>
            <Typography>
              Dont have an account?{" "}
              <span>
                <a href="/signup">Sign Up</a>
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.loginImageDiv}>
        <img
          className={styles.loginImage}
          src="/images/banner.png"
          alt="banner"
        />
      </div>
    </div>
  );
}
