import { Button } from "@mui/material";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navDiv}>
      <Button variant="contained">Login</Button>
      <Button variant="contained">Logout</Button>
    </div>
  );
}
