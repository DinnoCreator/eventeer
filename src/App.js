import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketDisplay from "./pages/TicketDisplay";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view" element={<TicketDisplay />} />
    </Routes>
  );
}

export default App;
