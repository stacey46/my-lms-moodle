export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        {/* Fixed Student Number in top-left corner */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            padding: "5px 10px",
            backgroundColor: "#f0f0f0",
            fontWeight: "bold",
            zIndex: 1000,
          }}
        >
          Student Number: 21887929
        </div>

        <header style={{ padding: "10px", backgroundColor: "#eee", marginTop: "30px" }}>
          <h2>My LMS App</h2>
        </header>

        <main style={{ padding: "20px" }}>{children}</main>

        <footer style={{ padding: "10px", backgroundColor: "#eee", marginTop: "20px" }}>
          <p>© Stacey Jepkemoi 21887929</p>
        </footer>
      </body>
    </html>
  );
}
