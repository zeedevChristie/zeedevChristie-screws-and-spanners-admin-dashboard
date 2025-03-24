import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Dashboard from "./components/dashboard/dashboard";
import CreateNewUserPage from "./pages/create/createNewUserPage";
import CreateNewCustomerPage from "./pages/create/createNewCustomerPage";
import CreateServiceProviderPage from "./pages/create/createServiceProviderPage";
import CreateSupplierPage from "./pages/create/createNewSupplierPage";
// import "./style/dark.css";

export default function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/createNewUser"
            element={<CreateNewUserPage />}
          />
          <Route
            path="/dashboard/createNewCustomer"
            element={<CreateNewCustomerPage />}
          ></Route>
          <Route
            path="/dashboard/createNewServiceProvider"
            element={<CreateServiceProviderPage />}
          />
          <Route
            path="/dashboard/createNewSupplier"
            element={<CreateSupplierPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
