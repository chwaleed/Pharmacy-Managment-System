import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import AddMedicine from "./pages/add-medicine";
import AddSupplier from "./pages/add-supplier";
import Sales from "./pages/sales";
import Reports from "./pages/reports";
import Customers from "./pages/customers";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-medicine" element={<AddMedicine />} />
          <Route path="add-supplier" element={<AddSupplier />} />
          <Route path="sales" element={<Sales />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
