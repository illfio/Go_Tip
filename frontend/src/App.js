import styles from "./App.module.scss";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Worker from "./pages/WorkersPage/Workers";
import Businesses from "./pages/BusinessesPage/Businesses";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/worker-discovery" element={<Worker />} />
      <Route path="/Businesses" element={<Businesses />} />
    </Routes>
  );
}

export default App;
