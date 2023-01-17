import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketDisplay from "./pages/TicketDisplay";
import PurchasedTicket from "./pages/PurchasedTicket";
import OpenedTickets from "./pages/OpenedTickets";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProfileEdit from "./pages/settings/ProfileEdit";
import HomeCom from "./components/home/HomeCom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<HomeCom />} />
        <Route path="/display" element={<TicketDisplay />} />
        <Route path="/ticket" element={<PurchasedTicket />} />
        <Route path="/tickets" element={<OpenedTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileEdit />} />
    </Routes>
  );
}

export default App;
