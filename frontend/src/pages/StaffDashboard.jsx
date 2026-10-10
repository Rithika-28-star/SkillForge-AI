// StaffDashboard.jsx
// Dashboard for staff members (faculty, placement coordinators).
// Staff can manage question sets and review student profiles.
// Phase 1: Layout placeholder only. Real features come in Phase 2+.

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function StaffDashboard() {
  const modules = [
    { icon: "📝", title: "Manage Questions",    desc: "Add, edit, or remove coding practice questions by company.", status: "Coming in Phase 3" },
    { icon: "👨‍🎓", title: "Student Profiles",   desc: "View and review student skill scores and progress.", status: "Coming in Phase 2" },
    { icon: "📢", title: "Post Alerts",          desc: "Publish job, internship, and hackathon alerts for students.", status: "Coming in Phase 3" },
    { icon: "📊", title: "Analytics",           desc: "View batch-level placement readiness statistics.", status: "Coming in Phase 6" },
    { icon: "🎤", title: "Schedule Interviews", desc: "Create mock interview sessions for students.", status: "Coming in Phase 4" },
    { icon: "💬", title: "GD Topics",           desc: "Add and manage group discussion topic sets.", status: "Coming in Phase 4" },
  ];

  return (
    <div className="page">
      <Navbar role="staff" />

      <div className="container" style={{ padding: "2rem 1.5rem" }}>
        {/* Welcome banner */}
        <div style={styles.welcomeBanner}>
          <div>
            <h1 style={styles.welcomeTitle}>Staff Dashboard 🏫</h1>
            <p style={styles.welcomeSubtitle}>
              Logged in as <span className="badge badge-staff">STAFF</span>.
              Manage content and monitor student progress.
            </p>
          </div>
          <Link to="/login" className="btn btn-secondary">Logout</Link>
        </div>

        {/* Quick stats */}
        <div style={styles.statsBar}>
          {[
            { label: "Total Students", value: "—" },
            { label: "Questions Added", value: "0" },
            { label: "Alerts Posted", value: "0" },
            { label: "Interviews Set", value: "0" },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <div style={styles.statValue}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Modules */}
        <h2 style={{ marginBottom: "1rem", color: "#2d3748" }}>Staff Tools</h2>
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
          <strong>📌 Phase 1 Foundation:</strong> Staff management features will be activated in Phase 2 and 3.
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
  statValue: { fontSize: "2rem", fontWeight: "800", color: "#059669" },
  statLabel: { fontSize: "0.85rem", color: "#718096", marginTop: "0.2rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem", marginBottom: "2rem" },
  moduleCard: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  moduleIcon: { fontSize: "2rem" },
  moduleTitle: { fontWeight: "700", color: "#1a202c" },
  moduleDesc: { color: "#718096", fontSize: "0.9rem", flex: 1 },
  statusBadge: { display: "inline-block", marginTop: "0.5rem", padding: "0.2rem 0.6rem", backgroundColor: "#f0fff4", color: "#276749", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" },
  phaseNotice: { padding: "1rem 1.5rem", backgroundColor: "#fffbeb", borderRadius: "10px", border: "1px solid #f6e05e", color: "#744210", fontSize: "0.9rem" },
};

export default StaffDashboard;
