// app/layout.tsx
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LMS Moodle - Stacey Jepkemoi</title>
        <style>{`
          /* Light mode variables */
          :root {
            --bg-color: #ffffff;
            --text-color: #000000;
            --text-color-secondary: #666666;
            --card-bg: #f8f9fa;
            --border-color: #dee2e6;
            --link-color: #0066cc;
            --shadow: rgba(0, 0, 0, 0.1);
          }

          /* Dark mode variables */
          [data-theme="dark"] {
            --bg-color: #1a1a1a;
            --text-color: #ffffff;
            --text-color-secondary: #aaa;
            --card-bg: #2d2d2d;
            --border-color: #444444;
            --link-color: #4da6ff;
            --shadow: rgba(255, 255, 255, 0.1);
          }

          *, *::before, *::after {
            box-sizing: border-box;
          }

          body {
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          *:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
          }

          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #007bff;
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
            border-radius: 4px;
          }
          .skip-link:focus {
            top: 6px;
          }

          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>

      <body>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Fixed student number */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            padding: "5px 10px",
            backgroundColor: "var(--card-bg)",
            color: "var(--text-color)",
            fontWeight: "bold",
            zIndex: 1000,
            border: "1px solid var(--border-color)",
            fontSize: "12px",
            borderRadius: "0 0 4px 0",
          }}
        >
          Student Number: 21887929
        </div>

        {/* Header */}
        <Header />

        {/* Breadcrumb - appears right below the Header */}
        <Breadcrumb />

        {/* Main content */}
        <main
          id="main-content"
          style={{
            flex: 1,
            padding: "20px",
            maxWidth: "1200px",
            margin: "70px auto 0", // leave space for fixed student number + header + breadcrumb
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: "20px",
            backgroundColor: "var(--card-bg)",
            marginTop: "20px",
            textAlign: "center",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            © {new Date().getFullYear()} Stacey Jepkemoi | Student ID: 21887929
          </p>
          <p style={{ margin: "5px 0", fontSize: "12px", color: "var(--text-color-secondary)", opacity: 0.8 }}>
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </footer>
      </body>
    </html>
  );
}
