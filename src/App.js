import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketDisplay from "./pages/TicketDisplay";
import PurchasedTicket from "./pages/PurchasedTicket";
import OpenedTickets from "./pages/OpenedTickets";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/display" element={<TicketDisplay />} />
        <Route path="/ticket" element={<PurchasedTicket />} />
        <Route path="/tickets" element={<OpenedTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
