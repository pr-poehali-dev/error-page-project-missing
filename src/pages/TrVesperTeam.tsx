import { useState } from "react";

const LOGO_URL =
  "https://cdn.poehali.dev/projects/dbfa48f2-ddc4-43c1-b684-d2d4b335b72f/bucket/cd36aac6-6e66-4d03-81e6-07ffb601a3b4.png";

const NAV_LINKS = [
  { label: "ГЛАВНАЯ", href: "/" },
  { label: "УСЛУГИ", href: "/services" },
  { label: "КОМАНДА", href: "/team", active: true },
  { label: "КОНТАКТЫ", href: "/contacts" },
];

const TEAM = [
  {
    name: "Андрей Литвинов",
    role: "Founder & Head Trader",
    color: "#00e5ff",
    initials: "AL",
    tags: ["Forex", "EA разработка", "Менторинг"],
    desc: "Основатель TrVesper. Профессиональный трейдер и разработчик с многолетним опытом на рынке Forex. Специализируется на создании автоматизированных торговых систем.",
    since: "2021",
  },
  {
    name: "— Трейдер",
    role: "Senior Trader",
    color: "#c0ff00",
    initials: "ST",
    tags: ["Price Action", "Фундаментал", "Gold"],
    desc: "Специалист по ценовому действию и фундаментальному анализу. Основной фокус — драгметаллы и основные валютные пары.",
    since: "2022",
  },
  {
    name: "— Разработчик",
    role: "Backend Developer",
    color: "#ff00c8",
    initials: "BD",
    tags: ["Python", "API", "Автоматизация"],
    desc: "Разработчик бэкенд-систем и торговых ботов. Создаёт парсеры данных, интеграции с брокерами и системы мониторинга.",
    since: "2022",
  },
  {
    name: "— Аналитик",
    role: "Market Analyst",
    color: "#00e5ff",
    initials: "MA",
    tags: ["Теханализ", "Аналитика", "Отчёты"],
    desc: "Проводит ежедневный технический и фундаментальный анализ рынков. Готовит обзоры и сигналы для команды и клиентов.",
    since: "2023",
  },
  {
    name: "— Frontend Dev",
    role: "Frontend Developer",
    color: "#c0ff00",
    initials: "FD",
    tags: ["React", "TypeScript", "UI/UX"],
    desc: "Создаёт торговые дашборды, аналитические платформы и сайты команды. Специализируется на React и современном UI.",
    since: "2023",
  },
  {
    name: "— MQL Разработчик",
    role: "MQL Developer",
    color: "#ff00c8",
    initials: "MD",
    tags: ["MQL4", "MQL5", "Тестирование"],
    desc: "Разрабатывает советники и индикаторы для MetaTrader. Проводит оптимизацию и бэктестирование торговых стратегий.",
    since: "2023",
  },
];

const VALUES = [
  { icon: "⚡", title: "Результат", desc: "Работаем на конкретный результат, не на процесс" },
  { icon: "🔒", title: "Надёжность", desc: "Выполняем обязательства в срок и в полном объёме" },
  { icon: "📡", title: "Технологии", desc: "Используем современные решения и постоянно развиваемся" },
  { icon: "🤝", title: "Партнёрство", desc: "Строим долгосрочные отношения с клиентами" },
];

export default function TrVesperTeam() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "#070b14", minHeight: "100vh", color: "#fff", fontFamily: "'Oswald', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&family=Share+Tech+Mono&display=swap');

        @keyframes tmFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes tmShimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes tmScan { 0% { top:-2px; } 100% { top:100%; } }
        @keyframes tmPulse { 0%,100% { box-shadow: 0 0 8px var(--mc,#00e5ff); } 50% { box-shadow: 0 0 24px var(--mc,#00e5ff); } }

        .tm-fu1 { animation: tmFadeUp 0.6s ease forwards; animation-delay:0.1s; opacity:0; }
        .tm-fu2 { animation: tmFadeUp 0.6s ease forwards; animation-delay:0.25s; opacity:0; }
        .tm-fu3 { animation: tmFadeUp 0.6s ease forwards; animation-delay:0.4s; opacity:0; }

        .tm-nav-link { transition: color 0.2s; }
        .tm-nav-link:hover { color:#00e5ff !important; }
        .tm-nav-active { color:#00e5ff !important; }

        .tm-shimmer {
          background: linear-gradient(90deg, #00e5ff 0%, #fff 30%, #c0ff00 60%, #00e5ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: tmShimmer 4s linear infinite;
        }

        .tm-scan { position:fixed; left:0; width:100%; height:1px; background:rgba(0,229,255,0.04); animation: tmScan 8s linear infinite; pointer-events:none; z-index:999; }

        .tm-grid-bg {
          position:absolute; inset:0;
          background-image: linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events:none;
        }

        .tm-member-card {
          border: 1px solid #1a1a2e;
          padding: 36px 28px;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .tm-member-card:hover {
          border-color: var(--mc, #00e5ff);
          background: rgba(0,229,255,0.03);
          transform: translateY(-4px);
        }
        .tm-member-card .tm-card-glow {
          position:absolute; top:-40px; right:-40px;
          width:120px; height:120px; border-radius:50%;
          background: radial-gradient(circle, var(--mc,#00e5ff) 0%, transparent 70%);
          opacity:0;
          transition: opacity 0.3s;
        }
        .tm-member-card:hover .tm-card-glow { opacity:0.12; }

        .tm-avatar {
          width:56px; height:56px; border-radius:0;
          display:flex; align-items:center; justify-content:center;
          border: 1px solid var(--mc,#00e5ff);
          color: var(--mc,#00e5ff);
          font-family:'Oswald',sans-serif;
          font-size:18px; font-weight:700;
          letter-spacing:1px;
          margin-bottom:20px;
          flex-shrink:0;
        }

        .tm-tag {
          display:inline-block;
          border: 1px solid #1a1a2e;
          padding: 4px 12px;
          font-family:'IBM Plex Sans',sans-serif;
          font-size:10px; letter-spacing:2px;
          color:#444; text-transform:uppercase;
        }

        .tm-value-card {
          border: 1px solid #1a1a2e;
          padding: 32px 24px;
          transition: border-color 0.3s;
        }
        .tm-value-card:hover { border-color: #00e5ff33; }

        .tm-btn-primary {
          background: linear-gradient(135deg, #00e5ff22, #00e5ff11);
          border: 1px solid #00e5ff;
          color: #00e5ff;
          padding: 14px 36px;
          font-family:'IBM Plex Sans',sans-serif;
          font-size:12px; letter-spacing:4px;
          text-transform:uppercase;
          cursor:pointer; text-decoration:none;
          display:inline-block;
          transition: background 0.25s, box-shadow 0.25s;
        }
        .tm-btn-primary:hover { background:#00e5ff22; box-shadow: 0 0 20px #00e5ff44; }

        @media (max-width:768px) {
          .tm-team-grid { grid-template-columns: 1fr !important; }
          .tm-values-grid { grid-template-columns: 1fr 1fr !important; }
          .tm-nav-links { display:none !important; }
          .tm-menu-btn { display:flex !important; }
        }
        @media (min-width:769px) and (max-width:1024px) {
          .tm-team-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div className="tm-scan" />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 48px",
        background: "rgba(7,11,20,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1a2e",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img src={LOGO_URL} alt="TrVesper" style={{ width: "38px", height: "38px", objectFit: "contain" }} />
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px" }}>
            Tr<span className="tm-shimmer">Vesper</span>
          </span>
        </a>
        <div className="tm-nav-links" style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={`tm-nav-link ${l.active ? "tm-nav-active" : ""}`} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "3px", color: l.active ? "#00e5ff" : "#444", textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </div>
        <button className="tm-menu-btn" onClick={() => setMenuOpen(true)} style={{
          display: "none", flexDirection: "column", gap: "5px",
          background: "none", border: "none", cursor: "pointer", padding: "4px",
        }}>
          {[0, 1, 2].map(i => <span key={i} style={{ display: "block", width: "24px", height: "1px", background: "#00e5ff" }} />)}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(7,11,20,0.98)", zIndex: 200,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px",
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: "absolute", top: "24px", right: "24px",
            background: "none", border: "none", color: "#00e5ff", fontSize: "24px", cursor: "pointer",
          }}>✕</button>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px",
              letterSpacing: "5px", color: l.active ? "#00e5ff" : "#aaa",
              textDecoration: "none", textTransform: "uppercase",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ position: "relative", paddingTop: "120px", paddingBottom: "80px", overflow: "hidden" }}>
        <div className="tm-grid-bg" />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 80% 30%, rgba(192,255,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
          <div className="tm-fu1" style={{
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
            marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
            КТО МЫ
          </div>
          <h1 className="tm-fu2" style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "-2px", margin: "0 0 20px",
          }}>Команда</h1>
          <p className="tm-fu3" style={{
            fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "16px",
            lineHeight: 1.8, maxWidth: "560px", margin: 0,
          }}>
            Профессионалы в трейдинге и разработке, объединённые общей целью — создавать эффективные финансовые решения.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: "60px 0 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="tm-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {TEAM.map((m, i) => (
              <div key={i} className="tm-member-card" style={{ "--mc": m.color } as React.CSSProperties}>
                <div className="tm-card-glow" />
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
                  <div className="tm-avatar" style={{ "--mc": m.color } as React.CSSProperties}>{m.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 500,
                      letterSpacing: "0.5px", color: "#ccc", marginBottom: "4px",
                    }}>{m.name}</div>
                    <div style={{
                      fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
                      letterSpacing: "2px", color: m.color, textTransform: "uppercase",
                    }}>{m.role}</div>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                  fontSize: "13px", lineHeight: 1.8, margin: "0 0 20px",
                }}>{m.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {m.tags.map((t, j) => (
                    <span key={j} className="tm-tag">{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    fontFamily: "'IBM Plex Sans', sans-serif", color: "#2a2a3a",
                    fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
                  }}>В команде с {m.since}</span>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: m.color, opacity: 0.5,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "#0d1020", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: "60px" }}>
            <div style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
              marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px",
            }}>
              <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
              ЧЕМ МЫ РУКОВОДСТВУЕМСЯ
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "-1px", margin: 0,
            }}>Ценности команды</h2>
          </div>

          <div className="tm-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
            {VALUES.map((v, i) => (
              <div key={i} className="tm-value-card">
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 500,
                  textTransform: "uppercase", color: "#ccc", margin: "0 0 10px",
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                  fontSize: "13px", lineHeight: 1.8, margin: 0,
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section style={{ padding: "100px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
            marginBottom: "24px",
          }}>МЫ РАСТЁМ</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "-1px",
            margin: "0 0 20px",
          }}>Присоединяйтесь к<br />TrVesper</h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "15px",
            lineHeight: 1.8, marginBottom: "40px",
          }}>
            Ищем трейдеров и разработчиков с опытом и желанием работать в команде
          </p>
          <a href="/contacts" className="tm-btn-primary">Написать нам</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #1a1a2e", padding: "40px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px",
      }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "1px" }}>
          Tr<span style={{ color: "#00e5ff" }}>Vesper</span>
        </span>
        <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#2a2a3a", fontSize: "11px", letterSpacing: "2px" }}>
          © 2024 TrVesper
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00e5ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#333")}
            >{l.label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
