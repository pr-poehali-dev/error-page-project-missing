import { useParams } from "react-router-dom";

const ProjectNotFound = () => {
  const { id } = useParams();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#0d0d0d", fontFamily: "'Oswald', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

        @keyframes fuPnf {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slPnf {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes strikePnf {
          from { width: 0; }
          to { width: 100%; }
        }
        .pnf-scan {
          position: absolute; left: 0; width: 100%; height: 2px;
          background: rgba(255,255,255,0.025);
          animation: slPnf 5s linear infinite;
          pointer-events: none;
        }
        .pnf-1 { animation: fuPnf 0.55s ease forwards; animation-delay: 0.05s; opacity: 0; }
        .pnf-2 { animation: fuPnf 0.55s ease forwards; animation-delay: 0.18s; opacity: 0; }
        .pnf-3 { animation: fuPnf 0.55s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .pnf-4 { animation: fuPnf 0.55s ease forwards; animation-delay: 0.44s; opacity: 0; }
        .pnf-5 { animation: fuPnf 0.55s ease forwards; animation-delay: 0.58s; opacity: 0; }

        .pnf-strike {
          position: relative;
          display: inline-block;
        }
        .pnf-strike::after {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          height: 3px;
          background: #fff;
          animation: strikePnf 0.5s ease forwards;
          animation-delay: 0.7s;
          width: 0;
        }

        .pnf-btn:hover { background: #fff !important; color: #0d0d0d !important; }
        .pnf-link:hover { color: #fff !important; }
      `}</style>

      <div className="relative w-full max-w-xl mx-auto px-8 py-20 text-center overflow-hidden">
        <div className="pnf-scan" />

        {/* Метка */}
        <div
          className="pnf-1"
          style={{
            color: "#444",
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          — ПРОЕКТЫ / ОШИБКА
        </div>

        {/* Зачёркнутое название проекта */}
        <div
          className="pnf-2"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#333",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          <span className="pnf-strike">
            {id ? `#${id}` : "НЕИЗВЕСТНЫЙ ПРОЕКТ"}
          </span>
        </div>

        {/* Главный заголовок */}
        <h1
          className="pnf-2"
          style={{
            fontSize: "clamp(36px, 10vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#ffffff",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}
        >
          ПРОЕКТ
        </h1>
        <h1
          className="pnf-2"
          style={{
            fontSize: "clamp(36px, 10vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#222",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            margin: "0 0 28px",
          }}
        >
          НЕ СУЩЕСТВУЕТ
        </h1>

        {/* Разделитель */}
        <div
          className="pnf-3"
          style={{
            width: "48px",
            height: "3px",
            background: "#fff",
            margin: "0 auto 32px",
          }}
        />

        {/* Описание */}
        <p
          className="pnf-3"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#666",
            fontSize: "15px",
            lineHeight: 1.8,
            maxWidth: "380px",
            margin: "0 auto 12px",
          }}
        >
          Запрашиваемый проект не найден в портфолио. Возможно, он был удалён или ссылка некорректна.
        </p>

        <p
          className="pnf-3"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#333",
            fontSize: "13px",
            marginBottom: "52px",
          }}
        >
          Посмотрите другие работы или свяжитесь напрямую.
        </p>

        {/* Кнопки */}
        <div className="pnf-4" style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a
            href="/"
            className="pnf-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #fff",
              color: "#fff",
              padding: "14px 32px",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            ← Все проекты
          </a>
          <a
            href="/contacts"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid #222",
              color: "#555",
              padding: "14px 32px",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: "'Oswald', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#555"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#555"; e.currentTarget.style.borderColor = "#222"; }}
          >
            Контакты
          </a>
        </div>

        {/* Нижние ссылки */}
        <div
          className="pnf-5"
          style={{
            borderTop: "1px solid #1a1a1a",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {[
            { label: "Главная", href: "/" },
            { label: "Проекты", href: "/projects" },
            { label: "Контакты", href: "/contacts" },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="pnf-link"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                color: "#333",
                fontSize: "11px",
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

export default ProjectNotFound;
