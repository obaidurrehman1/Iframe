export default function AssessmentPage() {
    return (
      <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://app.testfuse.com/assessment_invitation/?invite_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTAzMjY3NjcsInVzZXIiOnsiZW1haWwiOiJ4aXZhYzgxOTQ1QGplYW5zc2kuY29tIiwicm9sZV9pZCI6ImNhbmRpZGF0ZSJ9LCJpYXQiOjE3NDkxMTcxNjd9.DIO6oNK1CdvgL2DRKmx6GDZ99cLRxNTnAmhPXoCkdio&assess_id=684168efe42a7643c75c2740"
          style={{ width: "100%", height: "100%", border: "none" }}
          referrerPolicy="strict-origin-when-cross-origin"
          title="Testfuse"
          allowFullScreen
          allow="fullscreen; camera; microphone; clipboard-read; clipboard-write"
        />
      </div>
    );
}
  