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
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import Tables from "./pages/Tables/Tables";

import RootLayout from "./components/Layout/RootLayout";
import Test from "./pages/Test";
import MenuCatgories from "./pages/Menu/MenuCategories";

function App() {
  const { user } = useContext(UserContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const CheckIfLogin = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };

  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            path="/login"
            element={
              <CheckIfLogin>
                <RootLayout showSidebarAndHeader={false}>
                  <Login />
                </RootLayout>
              </CheckIfLogin>
            }
          ></Route>
          <Route
            index
            element={
              <RequireAuth>
                <RootLayout>
                  <Dashboard />
                </RootLayout>
              </RequireAuth>
            }
          />
          <Route
            path="/orders"
            element={
              <RequireAuth>
                <RootLayout>
                  <Orders />
                </RootLayout>
              </RequireAuth>
            }
          />
          <Route
            path="/menus"
            element={
              <RequireAuth>
                <RootLayout>
                  <Menu />
                </RootLayout>
              </RequireAuth>
            }
          />
          <Route
            path="/reservations"
            element={
              <RequireAuth>
                <RootLayout>
                  <Reservation />
                </RootLayout>
              </RequireAuth>
            }
          />
          <Route
            path="/tables"
            element={
              <RequireAuth>
                <RootLayout>
                  <Tables />
                </RootLayout>
              </RequireAuth>
            }
          />
          <Route
            path="/categories"
            element={
              <RequireAuth>
                <RootLayout>
                  <MenuCatgories />
                </RootLayout>
              </RequireAuth>
            }
          />
          <Route
            path="/test"
            element={
              <RequireAuth>
                <RootLayout>
                  <Test />
                </RootLayout>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
