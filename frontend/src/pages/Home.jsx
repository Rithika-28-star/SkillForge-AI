// Home.jsx
// The landing page — the first thing visitors see when they open the app.
// It explains what SkillForge AI is and invites them to log in.

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  // Features we will build — shown as cards on the landing page
  const features = [
    { icon: "🤖", title: "AI Chatbot",        desc: "Get placement guidance from a real AI assistant." },
    { icon: "📄", title: "Resume Parser",      desc: "Upload your resume and auto-extract your skills." },
    { icon: "💻", title: "Coding Practice",    desc: "Company-specific questions linked to LeetCode & CodeChef." },
    { icon: "🎯", title: "Skill Matching",     desc: "See how your skills match real job requirements." },
    { icon: "📢", title: "Alerts",             desc: "Get notified about internships, jobs, and hackathons." },
    { icon: "🎤", title: "Mock Interviews",    desc: "Practice with AI-generated interview questions." },
    { icon: "💬", title: "Group Discussion",   desc: "Prepare for GD rounds with peers and AI feedback." },
    { icon: "👥", title: "Coding Rooms",       desc: "Collaborate with friends in real-time coding sessions." },
  ];

  return (
    <div className="page">
      {/* Navbar with no role (user is not logged in on home page) */}
      <Navbar role={null} />

      {/* Hero section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to SkillForge AI 🚀</h1>
        <p style={styles.heroSubtitle}>
          Your all-in-one, AI-powered placement preparation platform.
          Build skills, practice coding, and land your dream job.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/login" className="btn btn-primary">Get Started →</Link>
          <a href="#features" className="btn btn-secondary">Learn More</a>
        </div>
      </section>

      {/* Features grid */}
      <section id="features" style={styles.featuresSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Everything you need to get placed</h2>
          <div style={styles.grid}>
            {features.map((f, i) => (
              <div key={i} className="card" style={styles.featureCard}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 SkillForge AI — Built with ❤️ for placement success</p>
      </footer>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "5rem 2rem",
    background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    color: "white",
  },
  heroTitle: { fontSize: "2.8rem", fontWeight: "800", marginBottom: "1rem" },
  heroSubtitle: { fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto 2rem" },
  featuresSection: { padding: "4rem 0", backgroundColor: "#f0f4f8" },
  sectionTitle: { textAlign: "center", fontSize: "2rem", fontWeight: "700", marginBottom: "2rem", color: "#1a202c" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" },
  featureCard: { textAlign: "center" },
  featureIcon: { fontSize: "2.5rem", marginBottom: "0.5rem" },
  featureTitle: { fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.4rem", color: "#1a202c" },
  featureDesc: { color: "#4a5568", fontSize: "0.95rem" },
  footer: { textAlign: "center", padding: "2rem", backgroundColor: "#2d3748", color: "#a0aec0", marginTop: "auto" },
};

export default Home;
