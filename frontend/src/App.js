import styles from "./App.module.scss";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
