import "./App.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders/Orders";
function App() {
  return (
    <>
      <Router>
        <div className="flex w-screen">
          <Sidebar />
          <div className="w-full">
            <Header />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              {/* <Route path="/" element={<Login />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
