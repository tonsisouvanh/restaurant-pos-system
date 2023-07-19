import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import Settings from "./pages/Settings/Settings";
import Tables from "./pages/Tables/Tables";

import RootLayout from "./components/Layout/RootLayout";
import Test from "./pages/Test";
import Categories from "./pages/Categories/Categories";

function App() {
  const { user } = useContext(UserContext);
  // const user = { name: "John Doe", email: "john@hotmail.com" };

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const CheckIfLogin = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };

  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/">
            <Route
              path="/login"
              element={
                <CheckIfLogin>
                  <Login />
                </CheckIfLogin>
              }
            ></Route>
            <Route
              index
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/orders"
              element={
                <RequireAuth>
                  <Orders />
                </RequireAuth>
              }
            />
            <Route
              path="/menus"
              element={
                <RequireAuth>
                  <Menu />
                </RequireAuth>
              }
            />
            <Route
              path="/reservations"
              element={
                <RequireAuth>
                  <Reservation />
                </RequireAuth>
              }
            />
            <Route
              path="/tables"
              element={
                <RequireAuth>
                  <Tables />
                </RequireAuth>
              }
            />
            <Route
              path="/categories"
              element={
                <RequireAuth>
                  <Categories />
                </RequireAuth>
              }
            />
            <Route
              path="/test"
              element={
                <RequireAuth>
                  <Test />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
