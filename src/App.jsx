import { useEffect, useState } from "react";
import "./App.css";
import authService from "./appwrite/auth";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const authStatus = useSelector(state => state.auth.status)
  useEffect(() => {
    //console.log("called")
    authService
      .getUserData()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoading(false));
  }, [authStatus]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap  content-between ">
      <div className="w-full block">
        {location.pathname !== "/signin" && location.pathname !== "/signup" && (
          <Header />
        )}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
