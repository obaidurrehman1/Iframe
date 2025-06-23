export default function AssessmentPage() {
    return (
      <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://pr1255-app.testfuse.net/assessment_invitation/?invite_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTE1NDA4MjEsInVzZXIiOnsiZW1haWwiOiJ3aXRpaml2Mjg0QG5hYjQuY29tIiwicm9sZV9pZCI6ImNhbmRpZGF0ZSJ9LCJpYXQiOjE3NTAzMzEyMjF9.E7mTBYEB3RY8ugvz7ER1tzzfvQmo0PTpHIQOXujlGlc&assess_id=6853ef53e0fe79434fcba630"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Testfuse"
          allowFullScreen
          allow="fullscreen; camera; microphone; clipboard-read; clipboard-write; storage-access-by-user-activation"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
}
  