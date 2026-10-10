// Navbar.jsx
// A shared navigation bar shown at the top of every page.
// It uses react-router-dom Link so clicking nav items does NOT reload the page.

import { Link } from "react-router-dom";

// Props:
//   role — "student" | "staff" | "admin" | null (logged out)
function Navbar({ role }) {
  // Badge color based on user role
  const badgeClass = role ? `badge badge-${role}` : "";

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        {/* Link goes to home page */}
        <Link to="/" style={styles.brandLink}>
          🚀 SkillForge AI
        </Link>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {/* Show dashboard link only when logged in */}
        {role === "student" && <Link to="/student" style={styles.link}>Dashboard</Link>}
        {role === "staff"   && <Link to="/staff"   style={styles.link}>Dashboard</Link>}
        {role === "admin"   && <Link to="/admin"   style={styles.link}>Dashboard</Link>}

        {/* Show role badge when logged in, else show login link */}
        {role ? (
          <span className={badgeClass}>{role.toUpperCase()}</span>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </div>
    </nav>
  );
}

// Inline styles for simplicity at this stage
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#4f46e5",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  brand: { fontSize: "1.3rem", fontWeight: "bold" },
  brandLink: { color: "white", textDecoration: "none" },
  links: { display: "flex", gap: "1.5rem", alignItems: "center" },
  link: { color: "white", textDecoration: "none", fontWeight: "500" },
};

export default Navbar;
