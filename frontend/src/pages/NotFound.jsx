// NotFound.jsx
// Shown when the user navigates to a URL that doesn't exist.
// The "*" route in App.jsx catches all unknown paths and shows this page.

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <div className="page">
      <Navbar role={null} />
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <div style={styles.code}>404</div>
          <h2 style={styles.title}>Page Not Found</h2>
          <p style={styles.desc}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">← Go Home</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { display: "flex", justifyContent: "center", alignItems: "center", flex: 1, padding: "4rem" },
  content: { textAlign: "center" },
  code: { fontSize: "6rem", fontWeight: "900", color: "#e2e8f0", lineHeight: 1 },
  title: { fontSize: "2rem", fontWeight: "800", color: "#2d3748", marginBottom: "1rem" },
  desc: { color: "#718096", marginBottom: "2rem" },
};

export default NotFound;
