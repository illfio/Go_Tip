import styles from "./App.module.scss";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import Worker from "./pages/WorkersPage/Workers";
import Businesses from "./pages/BusinessesPage/Businesses";
import Splash from "./pages/SplashPage/Splash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/worker-discovery" element={<Worker />} />
      <Route path="/businesses" element={<Businesses />} />
    </Routes>
  );
}

export default App;
