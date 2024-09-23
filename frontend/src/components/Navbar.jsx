import { Button } from "@mui/material";
import styles from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className={styles.navDiv}>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="contained" onClick={() => navigate("/signup")}>
        Register
      </Button>
    </div>
  );
}
