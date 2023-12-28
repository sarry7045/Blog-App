import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { login, logout } from "./Store/AuthSlice";
import { Footer, Header } from "./Components/Index";
import authService from "./AppWrite/Authentication";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .isUserLogin()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
            <Header />
            <main>
              Todo :<Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <h6>Loading.....</h6>
      )}
    </>
  );
}

export default App;
