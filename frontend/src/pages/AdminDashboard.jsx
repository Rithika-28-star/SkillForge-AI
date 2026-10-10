// AdminDashboard.jsx
// Full control panel for administrators.
// Admins can manage users, roles, and all system settings.
// Phase 1: Layout placeholder only.

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  const modules = [
    { icon: "👥", title: "User Management",    desc: "Create, edit, deactivate student and staff accounts.", status: "Coming in Phase 2" },
    { icon: "🛡️", title: "Role Management",   desc: "Assign and change roles (student / staff / admin).", status: "Coming in Phase 2" },
    { icon: "📊", title: "System Analytics",  desc: "Platform-wide usage stats, active users, and logs.", status: "Coming in Phase 6" },
    { icon: "📝", title: "All Questions",      desc: "View, approve, or delete all practice questions.", status: "Coming in Phase 3" },
    { icon: "🔔", title: "Manage Alerts",     desc: "Approve and broadcast placement alerts to all users.", status: "Coming in Phase 3" },
    { icon: "⚙️", title: "System Settings",  desc: "Configure API keys, LLM models, and platform settings.", status: "Coming in Phase 6" },
  ];

  return (
    <div className="page">
      <Navbar role="admin" />

      <div className="container" style={{ padding: "2rem 1.5rem" }}>
        {/* Welcome banner */}
        <div style={styles.welcomeBanner}>
          <div>
            <h1 style={styles.welcomeTitle}>Admin Control Panel ⚙️</h1>
            <p style={styles.welcomeSubtitle}>
              Logged in as <span className="badge badge-admin">ADMIN</span>.
              You have full access to manage the entire platform.
            </p>
          </div>
          <Link to="/login" className="btn btn-secondary">Logout</Link>
        </div>

        {/* System stats */}
        <div style={styles.statsBar}>
          {[
            { label: "Total Users",    value: "—" },
            { label: "Staff Members",  value: "—" },
            { label: "Active Students",value: "—" },
            { label: "System Status",  value: "✅" },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <div style={styles.statValue}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Modules */}
        <h2 style={{ marginBottom: "1rem", color: "#2d3748" }}>Admin Tools</h2>
        <div style={styles.grid}>
          {modules.map((mod, i) => (
            <div key={i} className="card" style={styles.moduleCard}>
              <div style={styles.moduleIcon}>{mod.icon}</div>
              <h3 style={styles.moduleTitle}>{mod.title}</h3>
              <p style={styles.moduleDesc}>{mod.desc}</p>
              <span style={styles.statusBadge}>{mod.status}</span>
            </div>
          ))}
        </div>

        <div style={styles.phaseNotice}>
          <strong>📌 Phase 1 Foundation:</strong> Admin management tools will be activated in Phase 2+.
        </div>
      </div>
    </div>
  );
}

const styles = {
  welcomeBanner: { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", borderRadius: "12px", padding: "1.5rem 2rem", marginBottom: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  welcomeTitle: { fontSize: "1.6rem", fontWeight: "800", color: "#1a202c", marginBottom: "0.3rem" },
  welcomeSubtitle: { color: "#718096" },
  statsBar: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "2rem" },
  statCard: { background: "white", borderRadius: "12px", padding: "1.2rem", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
  statValue: { fontSize: "2rem", fontWeight: "800", color: "#9d174d" },
  statLabel: { fontSize: "0.85rem", color: "#718096", marginTop: "0.2rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem", marginBottom: "2rem" },
  moduleCard: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  moduleIcon: { fontSize: "2rem" },
  moduleTitle: { fontWeight: "700", color: "#1a202c" },
  moduleDesc: { color: "#718096", fontSize: "0.9rem", flex: 1 },
  statusBadge: { display: "inline-block", marginTop: "0.5rem", padding: "0.2rem 0.6rem", backgroundColor: "#fce7f3", color: "#9d174d", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" },
  phaseNotice: { padding: "1rem 1.5rem", backgroundColor: "#fffbeb", borderRadius: "10px", border: "1px solid #f6e05e", color: "#744210", fontSize: "0.9rem" },
};

export default AdminDashboard;
