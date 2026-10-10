// Login.jsx
// A placeholder login page.
// Phase 1: Shows the UI form only. No real authentication yet.
// Phase 2: Will connect to the backend /auth/login endpoint with JWT tokens.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  // useState stores form input values.
  // [value, setterFunction] = useState(initialValue)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role selection
  const [message, setMessage] = useState("");

  // useNavigate lets us redirect to a different page programmatically
  const navigate = useNavigate();

  // This function runs when the form is submitted
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the browser from refreshing the page

    // PLACEHOLDER: In Phase 2, we'll call the backend API here.
    // For now, we just simulate navigation based on selected role.
    setMessage(`✅ [Placeholder] Logging in as ${role}...`);

    // Redirect to the correct dashboard after a short delay
    setTimeout(() => {
      if (role === "student") navigate("/student");
      else if (role === "staff") navigate("/staff");
      else if (role === "admin") navigate("/admin");
    }, 1000);
  };

  return (
    <div className="page">
      <Navbar role={null} />

      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2 style={styles.title}>🔐 Sign In to SkillForge AI</h2>
          <p style={styles.subtitle}>Enter your credentials to access your dashboard</p>

          <form onSubmit={handleLogin} style={styles.form}>

            {/* Email input */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={styles.input}
              />
            </div>

            {/* Password input */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={styles.input}
              />
            </div>

            {/* Role selector — lets us demo different dashboards in Phase 1 */}
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Role (Demo — will be server-assigned in Phase 2)</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Status message */}
            {message && <p style={styles.message}>{message}</p>}

            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              Login →
            </button>
          </form>

          {/* Phase 1 notice */}
          <div style={styles.notice}>
            <strong>⚠️ Phase 1 Placeholder:</strong> This form doesn't call a real server yet.
            Real authentication (JWT tokens, hashed passwords) will be added in Phase 2.
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { display: "flex", justifyContent: "center", alignItems: "center", padding: "4rem 1rem", flex: 1 },
  card: { background: "white", borderRadius: "16px", padding: "2.5rem", maxWidth: "440px", width: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" },
  title: { fontSize: "1.6rem", fontWeight: "800", marginBottom: "0.3rem", color: "#1a202c" },
  subtitle: { color: "#718096", marginBottom: "2rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem" },
  fieldGroup: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  label: { fontWeight: "600", fontSize: "0.9rem", color: "#2d3748" },
  input: { padding: "0.7rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "1rem", outline: "none" },
  message: { color: "#48bb78", fontWeight: "600", textAlign: "center" },
  notice: { marginTop: "1.5rem", padding: "1rem", backgroundColor: "#fffbeb", borderRadius: "8px", fontSize: "0.85rem", color: "#744210", border: "1px solid #f6e05e" },
};

export default Login;
