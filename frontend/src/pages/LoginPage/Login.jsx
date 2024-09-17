import styles from "./login.module.scss";
import { Box, Typography, TextField, Button } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Login() {
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
            <Button
              sx={{
                backgroundColor: "white",
                border: "1px solid #ECEDE9",
                padding: "1em",
                color: "black",
                display: "flex",
                gap: "1em",
              }}
            >
              <img src="\public\images\google_icon.png" />
              <Typography>
                Sign In With <strong>Google</strong>
              </Typography>
            </Button>
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
              />
            </div>
            <div className={styles.signInFormInputDiv}>
              <p className={styles.signInFormInputLabel}>Password</p>
              <input
                className={styles.signInFormInputText}
                type="text"
                placeholder="Password"
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
            >
              Login
            </Button>
          </div>
          <div className={styles.signUp}>
            <Typography>
              Dont have an account?{" "}
              <span>
                <a href="/">Sign Up</a>
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
