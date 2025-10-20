import { Links, Meta, Outlet, Scripts } from "react-router";
import type { Route } from "./+types/root";
import logo from "./assets/images/logo.jpg";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Logo fijo en esquina superior izquierda */}
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          backgroundColor: 'white', // para contrastar
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <a href="/">
            <img 
              src={logo} 
              alt="logo" 
              style={{
                height: '50px',
                width: 'auto',
                display: 'block'
              }}
            />
          </a>
        </div>

        {/* Contenido principal */}
        <main style={{ paddingTop: '120px' }}>
          {children}
        </main>
        
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />
}
