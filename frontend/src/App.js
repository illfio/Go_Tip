import styles from "./App.module.scss";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignPage/Sign";
import Worker from "./pages/WorkersPage/Workers";
import Businesses from "./pages/BusinessesPage/Businesses";
import Splash from "./pages/SplashPage/Splash";
import Business from "./pages/BusinessPage/Business";

function ProtectedRoute({ user, redirectPath = "/login" }) {
  if (!user.isLoggedIn) return <Navigate to={redirectPath} replace />;
  return <Outlet />;
}

function App() {
  const user = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/business" element={<Business />} />
        <Route path="/worker-discovery" element={<Worker />} />
      </Route>
    </Routes>
  );
}

export default App;
