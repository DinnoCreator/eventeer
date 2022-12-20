import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketDisplay from "./pages/TicketDisplay";
import PurchasedTicket from "./pages/PurchasedTicket";
import OpenedTickets from "./pages/OpenedTickets";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/display" element={<TicketDisplay />} />
        <Route path="/ticket" element={<PurchasedTicket />} />
        <Route path="/tickets" element={<OpenedTickets />} />
    </Routes>
  );
}

export default App;
