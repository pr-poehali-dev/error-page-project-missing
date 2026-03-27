import { useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#0d0d0d", fontFamily: "'Oswald', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

        @keyframes glitch404 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }
        @keyframes scanline404 {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes fadeUp404 {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glitch-404 { animation: glitch404 3s infinite; }
        .scanline-404 {
          position: absolute; left: 0; width: 100%; height: 2px;
          background: rgba(255,255,255,0.03);
          animation: scanline404 4s linear infinite;
          pointer-events: none;
        }
        .fu1 { animation: fadeUp404 0.6s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .fu2 { animation: fadeUp404 0.6s ease forwards; animation-delay: 0.25s; opacity: 0; }
        .fu3 { animation: fadeUp404 0.6s ease forwards; animation-delay: 0.4s; opacity: 0; }
        .fu4 { animation: fadeUp404 0.6s ease forwards; animation-delay: 0.55s; opacity: 0; }
        .back-btn-404:hover { background: #ffffff !important; color: #0d0d0d !important; }
        .nav-link-404:hover { color: #ffffff !important; }
      `}</style>

      <div className="relative w-full max-w-2xl mx-auto px-8 py-16 text-center overflow-hidden">
        <div className="scanline-404" />

        <div
          className="fu1 mb-2"
          style={{
            color: "#555",
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "12px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          — 404 / СТРАНИЦА НЕ НАЙДЕНА
        </div>

        <h1
          className="glitch-404 fu2"
          style={{
            fontSize: "clamp(80px, 18vw, 160px)",
            fontWeight: 700,
            lineHeight: 1,
            color: "#ffffff",
            letterSpacing: "-4px",
            margin: "16px 0 8px",
            textTransform: "uppercase",
          }}
        >
          404
        </h1>

        <div
          className="fu3"
          style={{
            width: "48px",
            height: "3px",
            background: "#ffffff",
            margin: "0 auto 32px",
          }}
        />

        <p
          className="fu3"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#999",
            fontSize: "16px",
            lineHeight: 1.7,
            maxWidth: "420px",
            margin: "0 auto 12px",
          }}
        >
          Страница{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>
            {location.pathname}
          </span>{" "}
          не существует или была удалена.
        </p>

        <p
          className="fu3"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#555",
            fontSize: "14px",
            marginBottom: "48px",
          }}
        >
          Проверьте адрес или вернитесь на главную страницу.
        </p>

        <div className="fu4 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/"
            className="back-btn-404"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #ffffff",
              color: "#ffffff",
              padding: "14px 32px",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
            }}
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </a>

          <button
            onClick={() => history.back()}
            className="nav-link-404"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#555",
              padding: "14px 32px",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s ease",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 400,
            }}
          >
            <Icon name="RotateCcw" size={16} />
            Назад
          </button>
        </div>

        <div
          className="fu4"
          style={{
            marginTop: "80px",
            borderTop: "1px solid #1f1f1f",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "center",
            gap: "48px",
          }}
        >
          {[
            { label: "Главная", href: "/" },
            { label: "Проекты", href: "/projects" },
            { label: "Контакты", href: "/contacts" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-404"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                color: "#444",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
