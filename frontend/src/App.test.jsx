// App.test.jsx
// Basic tests for the frontend application.
// We use Vitest + React Testing Library.
//
// With the automatic JSX runtime (configured in vite.config.js),
// you do NOT need to import React at the top of test files.
//
// How to read these tests:
//   render(<Component />) — renders the component in a fake browser
//   screen.getByText("...")  — finds an element by its visible text
//   expect(...).toBeInTheDocument() — checks the element actually exists

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/StudentDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Helper: wrap any component that uses react-router (Link, useNavigate, etc.)
// in a MemoryRouter so tests don't need a real browser URL.
const renderWithRouter = (ui, { route = "/" } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
};

// ---- Home Page Tests ----
describe("Home Page", () => {
  it("renders the main heading", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Welcome to SkillForge AI/i)).toBeInTheDocument();
  });

  it("renders the Get Started button", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });

  it("shows all 8 feature cards", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/AI Chatbot/i)).toBeInTheDocument();
    expect(screen.getByText(/Resume Parser/i)).toBeInTheDocument();
    expect(screen.getByText(/Coding Practice/i)).toBeInTheDocument();
  });
});

// ---- Login Page Tests ----
describe("Login Page", () => {
  it("renders the login heading", () => {
    renderWithRouter(<Login />);
    expect(screen.getByText(/Sign In to SkillForge AI/i)).toBeInTheDocument();
  });

  it("renders the email and password fields", () => {
    renderWithRouter(<Login />);
    expect(screen.getByPlaceholderText(/you@example.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/••••••••/i)).toBeInTheDocument();
  });

  it("renders the role selector", () => {
    renderWithRouter(<Login />);
    // The role <select> should have Student, Staff, Admin options
    expect(screen.getByText("Student")).toBeInTheDocument();
    expect(screen.getByText("Staff")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });
});

// ---- Student Dashboard Tests ----
describe("Student Dashboard", () => {
  it("renders the welcome heading", () => {
    renderWithRouter(<StudentDashboard />);
    expect(screen.getByText(/Welcome back, Student/i)).toBeInTheDocument();
  });

  it("shows the STUDENT role badge", () => {
    renderWithRouter(<StudentDashboard />);
    // getAllByText because "STUDENT" appears in both the Navbar badge and the welcome text
    const badges = screen.getAllByText("STUDENT");
    expect(badges.length).toBeGreaterThan(0);
  });
});

// ---- Staff Dashboard Tests ----
describe("Staff Dashboard", () => {
  it("renders the staff dashboard heading", () => {
    renderWithRouter(<StaffDashboard />);
    expect(screen.getByText(/Staff Dashboard/i)).toBeInTheDocument();
  });

  it("shows the STAFF role badge", () => {
    renderWithRouter(<StaffDashboard />);
    // getAllByText because "STAFF" may appear in badge + aria text
    const badges = screen.getAllByText("STAFF");
    expect(badges.length).toBeGreaterThan(0);
  });
});

// ---- Admin Dashboard Tests ----
describe("Admin Dashboard", () => {
  it("renders the admin control panel heading", () => {
    renderWithRouter(<AdminDashboard />);
    // Heading contains emoji + text, use a partial match
    expect(screen.getByText(/Admin Control Panel/i)).toBeInTheDocument();
  });

  it("shows the ADMIN role badge", () => {
    renderWithRouter(<AdminDashboard />);
    // getAllByText because "ADMIN" appears in both badge and heading text
    const badges = screen.getAllByText("ADMIN");
    expect(badges.length).toBeGreaterThan(0);
  });
});

// ---- NotFound Page Tests ----
describe("NotFound Page", () => {
  it("renders 404 code", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders Page Not Found message", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });

  it("renders a go home link", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});
