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
import RegimeCreate from "./pages/authenticated/RegimeCreation";
import Test from "./pages/unauthenticated/test";
import TestQr from "./pages/unauthenticated/testSearch";
import PurchaseModal from "./components/purchaseModal/PurchaseModal";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomeCom/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/emailverification" element={<EmailVerification/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/regime/:regimeid/:id" element={<RegimeDashboard />} />
        <Route path="/regimecreate" element={<RegimeCreate />} />
        <Route path="/event/:id/:affiliate" element={<TicketDisplay />} />
        <Route path="/event/:id" element={<TicketDisplay />} />
        <Route path="/ticket" element={<PurchasedTicket />} />
        <Route path="/tickets" element={<OpenedTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/profile" element={<ProfileEdit />} />
        <Route path="/image" element={<Imager />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/search" element={<TestQr />} />
        <Route path="/purchase" element={<PurchaseModal />} />
    </Routes>
  );
}

export default App;
