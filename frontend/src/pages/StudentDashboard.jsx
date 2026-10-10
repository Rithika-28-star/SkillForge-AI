// StudentDashboard.jsx
// The main dashboard for students after they log in.
// Phase 1: Shows a placeholder layout with all future features listed.
// Later phases will make each card interactive and data-driven.

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  // Each card represents a feature module. Links and data are placeholders.
  const modules = [
    { icon: "🤖", title: "AI Chatbot",       desc: "Ask for placement tips, resume advice, and career guidance.", link: "#", status: "Coming in Phase 4" },
    { icon: "📄", title: "Resume Parser",    desc: "Upload your resume to auto-extract and analyze your skills.",  link: "#", status: "Coming in Phase 3" },
    { icon: "💻", title: "Coding Practice",  desc: "Solve company-specific coding problems from LeetCode & CodeChef.", link: "#", status: "Coming in Phase 3" },
    { icon: "🎯", title: "Skill Matcher",    desc: "See how well your skills match job descriptions.",             link: "#", status: "Coming in Phase 3" },
    { icon: "📢", title: "Job Alerts",       desc: "Browse internship, job, and hackathon opportunities.",          link: "#", status: "Coming in Phase 3" },
    { icon: "🎤", title: "Mock Interview",   desc: "Practice technical and HR interview questions with AI.",        link: "#", status: "Coming in Phase 4" },
    { icon: "💬", title: "GD Practice",      desc: "Group discussion topics with AI-generated starter prompts.",   link: "#", status: "Coming in Phase 4" },
    { icon: "👥", title: "Coding Room",      desc: "Collaborate in real-time with friends on coding problems.",    link: "#", status: "Coming in Phase 5" },
  ];

  return (
    <div className="page">
      <Navbar role="student" />

      <div className="container" style={{ padding: "2rem 1.5rem" }}>
        {/* Welcome banner */}
        <div style={styles.welcomeBanner}>
          <div>
            <h1 style={styles.welcomeTitle}>Welcome back, Student! 👋</h1>
            <p style={styles.welcomeSubtitle}>
              You are logged in as a <span className="badge badge-student">STUDENT</span>.
              Start preparing for placements below.
            </p>
          </div>
          <Link to="/login" className="btn btn-secondary">Logout</Link>
        </div>

        {/* Stats bar — placeholder numbers */}
        <div style={styles.statsBar}>
          {[
            { label: "Problems Solved", value: "0" },
            { label: "Skill Score",     value: "—" },
            { label: "Interviews Done", value: "0" },
            { label: "Alerts Pending",  value: "0" },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <div style={styles.statValue}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Feature modules grid */}
        <h2 style={{ marginBottom: "1rem", color: "#2d3748" }}>Your Tools</h2>
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

        {/* Phase notice */}
        <div style={styles.phaseNotice}>
          <strong>📌 Phase 1 Foundation:</strong> This dashboard is a placeholder.
          Feature cards will become fully functional in upcoming phases.
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
  statValue: { fontSize: "2rem", fontWeight: "800", color: "#4f46e5" },
  statLabel: { fontSize: "0.85rem", color: "#718096", marginTop: "0.2rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem", marginBottom: "2rem" },
  moduleCard: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  moduleIcon: { fontSize: "2rem" },
  moduleTitle: { fontWeight: "700", color: "#1a202c" },
  moduleDesc: { color: "#718096", fontSize: "0.9rem", flex: 1 },
  statusBadge: { display: "inline-block", marginTop: "0.5rem", padding: "0.2rem 0.6rem", backgroundColor: "#ebf4ff", color: "#3182ce", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" },
  phaseNotice: { padding: "1rem 1.5rem", backgroundColor: "#fffbeb", borderRadius: "10px", border: "1px solid #f6e05e", color: "#744210", fontSize: "0.9rem" },
};

export default StudentDashboard;
