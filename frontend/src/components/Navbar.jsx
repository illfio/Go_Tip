import { Box, Button } from "@mui/material";
import styles from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className={styles.navDiv}>
      <div className={styles.navLogo}>
        <img src="/" alt="logos" />
      </div>
      <div className={styles.navAnchors}>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Features</a>
        <a href="/">FAQ</a>
        <a href="/">Contact Us</a>
      </div>
      <div className={styles.navButtons}>
        <button className={styles.signup} onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <button className={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}
