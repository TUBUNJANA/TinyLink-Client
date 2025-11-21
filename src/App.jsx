import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/code/:code" element={<StatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
