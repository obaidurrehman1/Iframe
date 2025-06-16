import { useEffect, useState } from "react";

export default function EvalyDashboard() {
  const [resumeData, setResumeData] = useState(null);
  const [showIframe, setShowIframe] = useState(false); // Toggle to show iframe

  useEffect(() => {
    const data = localStorage.getItem("resume_assessment");
    if (data) {
      setResumeData(JSON.parse(data));
    }
  }, []);

  if (!resumeData) {
    return <div style={{ padding: "2rem" }}>⚠️ No paused assessment found.</div>;
  }

  const { assess_id } = resumeData;
  const resumeUrl = `http://localhost:3001/assessment_invitation/?invite_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDkyMDY3NzcsInVzZXIiOnsiZW1haWwiOiJ4YXZpeG9tNjU0QG9mdWxhci5jb20iLCJyb2xlX2lkIjoiY2FuZGlkYXRlIn0sImlhdCI6MTc0Nzk5NzE3N30.tY--ZllHAIPe9wiChwylw8CfecQLdD6SWWyQOwx14G0&assess_id=${assess_id}`;

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "1rem", background: "#f0f0f0", borderBottom: "1px solid #ccc" }}>


        <h2>Evaly Dashboard</h2>
        <p>You paused an assessment. Click below to resume it.</p>
        <button
          style={{
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
          onClick={() => setShowIframe(true)}
        >
          ▶️ Resume Assessment
        </button>
      </div>

      {showIframe && (
        <iframe
          src={resumeUrl}
          title="Testfuse Embedded in Evaly"
          style={{ flex: 1, border: "none" }}
          allow="fullscreen; camera; microphone; clipboard-read; clipboard-write"
        />
      )}
    </div>
  );
}
