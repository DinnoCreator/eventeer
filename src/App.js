import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/authenticated/Dashboard"
import TicketDisplay from "./pages/authenticated/TicketDisplay";
import PurchasedTicket from "./pages/authenticated/PurchasedTicket";
import OpenedTickets from "./pages/authenticated/OpenedTickets";
import Profile from "./pages/authenticated/Profile";
import Settings from "./pages/authenticated/Settings";
import ProfileEdit from "./pages/authenticated/settings/ProfileEdit";
import HomeCom from "./components/home/HomeCom";
import Login from "./pages/unauthenticated/Login";
import SignUp from "./pages/unauthenticated/SignUp";
import EmailVerification from "./pages/unauthenticated/EmailVerification";
import RegimeDashboard from "./pages/authenticated/RegimeDashboard";
import Imager from "./pages/ImageUpload";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomeCom/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/emailverification" element={<EmailVerification/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/regime" element={<RegimeDashboard />} />
        <Route path="/display" element={<TicketDisplay />} />
        <Route path="/ticket" element={<PurchasedTicket />} />
        <Route path="/tickets" element={<OpenedTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileEdit />} />
        <Route path="/image" element={<Imager />} />
    </Routes>
  );
}

export default App;
