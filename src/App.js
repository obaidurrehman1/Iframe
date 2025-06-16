import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AssessmentPage from "./AssessmentPage";
import EvalyDashboard from "./EvalyDashboard";

function AppRouter() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (event.data?.type === "PAUSE_ASSESSMENT") {
        const { assess_id } = event.data.payload;

        // Save to localStorage so EvalyDashboard can access it
        localStorage.setItem("resume_assessment", JSON.stringify({ assess_id }));

        // Navigate to Evaly Dashboard
        navigate("/evaly-dashboard");
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/evaly-dashboard" element={<EvalyDashboard />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
