const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#0d0d0d", fontFamily: "'Oswald', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUpIdx {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanlineIdx {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .idx-scanline {
          position: absolute; left: 0; width: 100%; height: 2px;
          background: rgba(255,255,255,0.025);
          animation: scanlineIdx 5s linear infinite;
          pointer-events: none;
        }
        .idx-fu1 { animation: fadeUpIdx 0.6s ease forwards; animation-delay: 0.05s; opacity: 0; }
        .idx-fu2 { animation: fadeUpIdx 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; }
        .idx-fu3 { animation: fadeUpIdx 0.6s ease forwards; animation-delay: 0.35s; opacity: 0; }
        .idx-fu4 { animation: fadeUpIdx 0.6s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .idx-fu5 { animation: fadeUpIdx 0.6s ease forwards; animation-delay: 0.65s; opacity: 0; }
        .cursor-blink { animation: blink 1.1s step-end infinite; }
        .idx-btn-main:hover { background: #ffffff !important; color: #0d0d0d !important; }
        .idx-link:hover { color: #ffffff !important; }
      `}</style>

      <div className="relative w-full max-w-2xl mx-auto px-8 py-20 text-center overflow-hidden">
        <div className="idx-scanline" />

        {/* Метка */}
        <div
          className="idx-fu1"
          style={{
            color: "#444",
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          — 00 / ПРОЕКТ
        </div>

        {/* Заголовок */}
        <h1
          className="idx-fu2"
          style={{
            fontSize: "clamp(48px, 12vw, 96px)",
            fontWeight: 700,
            lineHeight: 1,
            color: "#ffffff",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            margin: "0 0 4px",
          }}
        >
          ПРОЕКТ
          <span
            className="cursor-blink"
            style={{ color: "#555", marginLeft: "6px" }}
          >
            _
          </span>
        </h1>

        <h2
          className="idx-fu2"
          style={{
            fontSize: "clamp(48px, 12vw, 96px)",
            fontWeight: 700,
            lineHeight: 1,
            color: "#2a2a2a",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            margin: "0 0 24px",
          }}
        >
          В РАЗРАБОТКЕ
        </h2>

        {/* Разделитель */}
        <div
          className="idx-fu3"
          style={{
            width: "48px",
            height: "3px",
            background: "#ffffff",
            margin: "0 auto 36px",
          }}
        />

        {/* Описание */}
        <p
          className="idx-fu3"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#777",
            fontSize: "15px",
            lineHeight: 1.8,
            maxWidth: "400px",
            margin: "0 auto 12px",
          }}
        >
          Сайт находится на стадии наполнения. Контент появится совсем скоро — возвращайтесь позже.
        </p>

        <p
          className="idx-fu3"
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#3a3a3a",
            fontSize: "13px",
            marginBottom: "56px",
          }}
        >
          Если вы владелец сайта — начните добавлять контент через редактор.
        </p>

        {/* Статусная плашка */}
        <div
          className="idx-fu4"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #1f1f1f",
            padding: "10px 24px",
            marginBottom: "56px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
              boxShadow: "0 0 8px #4ade80",
            }}
          />
          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              color: "#555",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Сайт активен · контент добавляется
          </span>
        </div>

        {/* Карточки-заглушки */}
        <div
          className="idx-fu4"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1px",
            background: "#1a1a1a",
            border: "1px solid #1a1a1a",
            marginBottom: "56px",
          }}
        >
          {["Проект 01", "Проект 02", "Проект 03"].map((name, i) => (
            <div
              key={i}
              style={{
                background: "#0d0d0d",
                padding: "28px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #222",
                  margin: "0 auto 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#333", fontSize: "18px" }}>○</span>
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: "#2a2a2a",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </div>
            </div>
          ))}
        </div>

        {/* Нижние ссылки */}
        <div
          className="idx-fu5"
          style={{
            borderTop: "1px solid #1a1a1a",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {["Главная", "Проекты", "Контакты"].map((label) => (
            <a
              key={label}
              href="#"
              className="idx-link"
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
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
