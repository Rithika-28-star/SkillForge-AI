// App.jsx
// This is the ROOT COMPONENT and ROUTER of your app.
// It decides which page to show based on the current URL.
//
// How routing works:
//   - User visits "/"          → Show Home page
//   - User visits "/login"     → Show Login page
//   - User visits "/student"   → Show Student Dashboard
//   - User visits "/staff"     → Show Staff Dashboard
//   - User visits "/admin"     → Show Admin Dashboard
//   - Any other URL            → Show NotFound (404) page

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // BrowserRouter enables URL-based navigation without page reloads
    <BrowserRouter>
      <Routes>
        {/* Each <Route> maps a URL path to a page component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Catch-all route: matches any URL not listed above */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
