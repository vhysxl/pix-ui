export function Toast({ show, message }) {
  if (!show) return null;

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 20px",
          background: "linear-gradient(135deg, #ff69b4, #ffb6d9)",
          color: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(255,105,180,0.4)",
          minWidth: "280px",
          fontFamily: "Arial, sans-serif",
          animation: "slideIn 0.3s ease",
          zIndex: 9999,
        }}
      >
        <span style={{ fontSize: "28px" }}>🎀</span>

        <div>
          <h3 style={{ margin: 0 }}>Hi Barbie! 💖</h3>
          <p style={{ margin: "4px 0 0", fontSize: "14px" }}>
            {message}
          </p>
        </div>

        <span style={{ fontSize: "24px", marginLeft: "auto" }}>✨</span>
      </div>
    </>
  );
}
