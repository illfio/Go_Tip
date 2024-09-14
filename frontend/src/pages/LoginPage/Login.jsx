import styles from "./login.module.scss";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <div className={styles.loginMainDiv}>
      <div className={styles.loginFunctionalityParentDiv}>
        <img className={styles.logo} src="/" alt="mylogo" />
        <div className={styles.loginFunctionalityDiv}>
          <div className={styles.loginFunctionalityHeader}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Get Started Now
            </Typography>
            <Typography variant="p" sx={{ fontSize: "1.5vw" }}>
              Helping the world by tipping made easy.
            </Typography>
          </div>
          <div className={styles.authenticationDiv}>
            <Button variant="contained">Sign In With Google</Button>
            <Button variant="contained">Sign In With Apple</Button>
          </div>
          <div>line break</div>
          <div></div>
        </div>
      </div>
      <div className={styles.loginImage}></div>
    </div>
  );
}
