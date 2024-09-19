import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import styles from "./signup.module.scss";
import { useState } from "react";

export default function Signup() {
  let [showWorkerInput, setShowWorkerInput] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    roleID: 0,
    workerRoleID: 0,
  });

  const handleUserChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClear = () => {
    setUser({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      roleID: 0,
      workerRoleID: 0,
    });
  };

  const handleFormSubmit = async () => {
    if (user.firstName && user.lastName && user.email) {
      try {
        let submitUser = {
          first_name: user.firstName,
          last_name: user.lastName,
          phone_number: user.phoneNumber,
          email: user.email,
          password: user.password,
          roleID: user.roleID,
          workerRoleID: user.workerRoleID,
        };

        let result = await axios.post(
          "http://localhost:8080/users/register",
          submitUser
        );

        return true;
      } catch (error) {
        console.error({ message: error });
      }
    }
  };

  return (
    <div className={styles.signupMainDiv}>
      <div className={styles.signupContent}>
        <div className={styles.formDiv}>
          <InputLabel>Full Name</InputLabel>
          <TextField
            name="firstName"
            id="firstNameInput"
            label="First Name"
            variant="outlined"
            required
            value={user.firstName}
            onChange={handleUserChange}
          />
          <TextField
            name="lastName"
            id="lastNameInput"
            label="Last Name"
            variant="outlined"
            required
            value={user.lastName}
            onChange={handleUserChange}
          />
          <TextField
            name="phoneNumber"
            id="phoneNumberInput"
            label="Phone Number"
            variant="outlined"
            value={user.phoneNumber}
            onChange={handleUserChange}
          />
          <TextField
            name="email"
            id="emailInput"
            label="Email"
            variant="outlined"
            required
            value={user.email}
            onChange={handleUserChange}
          />
          <TextField
            name="password"
            id="passwordInput"
            label="Password"
            variant="outlined"
            required
            value={user.password}
            onChange={handleUserChange}
          />

          <FormControl label="Role" required>
            <InputLabel>Role</InputLabel>
            <Select
              label="Role"
              name="roleID"
              value={user.roleID}
              onChange={handleUserChange}
            >
              <MenuItem onClick={() => setShowWorkerInput(false)} value={0}>
                Customer
              </MenuItem>
              <MenuItem onClick={() => setShowWorkerInput(true)} value={1}>
                Worker
              </MenuItem>
              <MenuItem onClick={() => setShowWorkerInput(false)} value={2}>
                Owner
              </MenuItem>
            </Select>
          </FormControl>

          {showWorkerInput ? (
            <FormControl label="Worker Role" required>
              <InputLabel>Role</InputLabel>
              <Select
                label="Worker Role"
                name="workerRoleID"
                value={user.workerRoleID}
                onChange={handleUserChange}
              >
                <MenuItem value={0}>Server</MenuItem>
                <MenuItem value={1}>Head Server</MenuItem>
                <MenuItem value={2}>Host / Hostess</MenuItem>
                <MenuItem value={3}>Busser</MenuItem>
                <MenuItem value={4}>Manager</MenuItem>
                <MenuItem value={5}>Chef</MenuItem>
              </Select>
            </FormControl>
          ) : (
            ""
          )}
        </div>
        <div className={styles.formButtonsDiv}>
          <Button variant="contained">Login</Button>
          <Button
            variant="contained"
            onClick={() => {
              let result = handleFormSubmit();
              if (result) handleClear();
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
