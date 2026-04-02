import { useEffect, useRef, useState } from "react";

const LOGO_URL =
  "https://cdn.poehali.dev/projects/dbfa48f2-ddc4-43c1-b684-d2d4b335b72f/bucket/cd36aac6-6e66-4d03-81e6-07ffb601a3b4.png";

const NAV_LINKS = [
  { label: "ГЛАВНАЯ", href: "/" },
  { label: "УСЛУГИ", href: "/services" },
  { label: "КОМАНДА", href: "/team" },
  { label: "КОНТАКТЫ", href: "/contacts" },
];

const STATS = [
  { value: "3+", label: "Года опыта" },
  { value: "50+", label: "Проектов сдано" },
  { value: "12", label: "Членов команды" },
  { value: "98%", label: "Довольных клиентов" },
];

const SERVICES = [
  {
    icon: "📈",
    title: "Форекс-трейдинг",
    desc: "Профессиональная торговля на валютных рынках. Аналитика, стратегии, автоматизированные системы.",
    color: "#00e5ff",
  },
  {
    icon: "🤖",
    title: "Торговые роботы",
    desc: "Разработка алготорговых систем и советников на MQL4/MQL5 под ваши стратегии.",
    color: "#c0ff00",
  },
  {
    icon: "💻",
    title: "Веб-разработка",
    desc: "Современные сайты, торговые дашборды и аналитические платформы.",
    color: "#ff00c8",
  },
  {
    icon: "📊",
    title: "Обучение трейдингу",
    desc: "Курсы, менторинг и разборы сделок для начинающих и опытных трейдеров.",
    color: "#00e5ff",
  },
];

const TICKER_ITEMS = [
  "EUR/USD", "GBP/JPY", "XAU/USD", "BTC/USDT", "NASDAQ", "S&P500",
  "EUR/USD", "GBP/JPY", "XAU/USD", "BTC/USDT", "NASDAQ", "S&P500",
];

export default function TrVesperHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typed, setTyped] = useState("");
  const typeRef = useRef(0);
  const fullText = "ПРОГРАММИРОВАНИЕ И ТРЕЙДИНГ";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeRef.current >= fullText.length) return;
    const t = setTimeout(() => {
      typeRef.current += 1;
      setTyped(fullText.slice(0, typeRef.current));
    }, 60);
    return () => clearTimeout(t);
  }, [typed]);

  return (
    <div style={{ background: "#070b14", minHeight: "100vh", color: "#fff", fontFamily: "'Oswald', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&family=Share+Tech+Mono&display=swap');

        @keyframes tvFadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes tvGlow { 0%,100% { text-shadow: 0 0 8px #00e5ff88; } 50% { text-shadow: 0 0 24px #00e5ffcc, 0 0 48px #00e5ff44; } }
        @keyframes tvPulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @keyframes tvTicker { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes tvScan { 0% { top:-2px; } 100% { top:100%; } }
        @keyframes tvFloat { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-12px); } }
        @keyframes tvGrid { from { opacity:0; } to { opacity:1; } }
        @keyframes tvBorder { 0% { width:0; } 100% { width:100%; } }
        @keyframes tvShimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .tv-fu1 { animation: tvFadeUp 0.6s ease forwards; animation-delay:0.1s; opacity:0; }
        .tv-fu2 { animation: tvFadeUp 0.6s ease forwards; animation-delay:0.25s; opacity:0; }
        .tv-fu3 { animation: tvFadeUp 0.6s ease forwards; animation-delay:0.4s; opacity:0; }
        .tv-fu4 { animation: tvFadeUp 0.6s ease forwards; animation-delay:0.55s; opacity:0; }
        .tv-fu5 { animation: tvFadeUp 0.6s ease forwards; animation-delay:0.7s; opacity:0; }
        .tv-fu6 { animation: tvFadeUp 0.6s ease forwards; animation-delay:0.85s; opacity:0; }

        .tv-glow { animation: tvGlow 3s ease infinite; }

        .tv-nav-link { transition: color 0.2s, letter-spacing 0.2s; }
        .tv-nav-link:hover { color: #00e5ff !important; letter-spacing: 4px; }

        .tv-btn-primary {
          background: linear-gradient(135deg, #00e5ff22, #00e5ff11);
          border: 1px solid #00e5ff;
          color: #00e5ff;
          padding: 14px 36px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }
        .tv-btn-primary:hover { background: #00e5ff22; box-shadow: 0 0 20px #00e5ff44, inset 0 0 20px #00e5ff11; }
        .tv-btn-primary::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:#00e5ff; transition: width 0.3s ease; }
        .tv-btn-primary:hover::after { width:100%; }

        .tv-btn-sec {
          background: transparent;
          border: 1px solid #2a2a3a;
          color: #666;
          padding: 14px 36px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.25s, color 0.25s;
        }
        .tv-btn-sec:hover { border-color: #555; color: #aaa; }

        .tv-stat-card {
          border: 1px solid #1a1a2e;
          padding: 32px 24px;
          text-align: center;
          transition: border-color 0.25s, background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .tv-stat-card::before {
          content:'';
          position:absolute;
          top:0; left:0; right:0;
          height:2px;
          background: linear-gradient(90deg, transparent, #00e5ff, transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .tv-stat-card:hover { border-color: #00e5ff33; background: #00e5ff08; }
        .tv-stat-card:hover::before { transform: translateX(100%); }

        .tv-service-card {
          border: 1px solid #1a1a2e;
          padding: 36px 28px;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .tv-service-card:hover { border-color: var(--card-color, #00e5ff); background: #00e5ff06; transform: translateY(-4px); }
        .tv-service-card .tv-card-bar {
          position:absolute; bottom:0; left:0; width:0; height:2px;
          background: var(--card-color, #00e5ff);
          transition: width 0.4s ease;
        }
        .tv-service-card:hover .tv-card-bar { width:100%; }

        .tv-ticker-wrap {
          overflow: hidden;
          border-top: 1px solid #1a1a2e;
          border-bottom: 1px solid #1a1a2e;
          padding: 12px 0;
          background: #0d1020;
        }
        .tv-ticker { display: flex; gap: 80px; animation: tvTicker 18s linear infinite; white-space: nowrap; }
        .tv-ticker-item { font-family:'Share Tech Mono', monospace; font-size:12px; color:#00e5ff88; letter-spacing:2px; }

        .tv-scan {
          position:fixed; left:0; width:100%; height:1px;
          background: rgba(0,229,255,0.04);
          animation: tvScan 8s linear infinite;
          pointer-events:none; z-index:999;
        }

        .tv-grid-bg {
          position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events:none;
        }

        .tv-logo-float { animation: tvFloat 5s ease-in-out infinite; }

        .tv-shimmer-text {
          background: linear-gradient(90deg, #00e5ff 0%, #ffffff 30%, #c0ff00 60%, #00e5ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: tvShimmer 4s linear infinite;
        }

        .tv-mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(7,11,20,0.98);
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .tv-hero-grid { grid-template-columns: 1fr !important; }
          .tv-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .tv-services-grid { grid-template-columns: 1fr !important; }
          .tv-nav-links { display: none !important; }
          .tv-menu-btn { display: flex !important; }
        }
      `}</style>

      <div className="tv-scan" />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 48px",
        background: scrolled ? "rgba(7,11,20,0.97)" : "rgba(7,11,20,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #1a1a2e" : "none",
        transition: "background 0.3s, border 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img src={LOGO_URL} alt="TrVesper" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "1px" }}>
            Tr<span className="tv-shimmer-text">Vesper</span>
          </span>
        </a>

        <div className="tv-nav-links" style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="tv-nav-link" style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "3px", color: "#444", textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </div>

        <button
          className="tv-menu-btn"
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none", flexDirection: "column", gap: "5px",
            background: "none", border: "none", cursor: "pointer", padding: "4px",
          }}
        >
          {[0, 1, 2].map(i => <span key={i} style={{ display: "block", width: "24px", height: "1px", background: "#00e5ff" }} />)}
        </button>
      </nav>

      {menuOpen && (
        <div className="tv-mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{
            position: "absolute", top: "24px", right: "24px",
            background: "none", border: "none", color: "#00e5ff", fontSize: "24px", cursor: "pointer",
          }}>✕</button>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px",
              letterSpacing: "5px", color: "#aaa", textDecoration: "none",
              textTransform: "uppercase",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      {/* TICKER */}
      <div style={{ paddingTop: "80px" }}>
        <div className="tv-ticker-wrap">
          <div className="tv-ticker">
            {TICKER_ITEMS.map((t, i) => (
              <span key={i} className="tv-ticker-item">⬡ {t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="tv-grid-bg" />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(192,255,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 48px", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="tv-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* Left */}
            <div>
              <div className="tv-fu1" style={{
                fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
                letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase", marginBottom: "24px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
                Established by Andrey Litvinov
              </div>

              <h1 className="tv-fu2" style={{
                fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 700,
                lineHeight: 1.0, letterSpacing: "-2px", textTransform: "uppercase",
                margin: "0 0 16px",
              }}>
                Tr<span className="tv-shimmer-text">Vesper</span>
              </h1>

              <div className="tv-fu3" style={{
                fontFamily: "'Share Tech Mono', monospace", fontSize: "14px",
                color: "#00e5ff", letterSpacing: "3px", marginBottom: "32px",
                minHeight: "24px",
              }}>
                {typed}<span style={{ animation: "tvPulse 1s infinite" }}>|</span>
              </div>

              <p className="tv-fu3" style={{
                fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "16px",
                lineHeight: 1.9, marginBottom: "40px", maxWidth: "460px",
              }}>
                Команда профессиональных трейдеров и разработчиков. Создаём торговые алгоритмы, обучаем трейдингу и строим технологичные решения для финансовых рынков.
              </p>

              <div className="tv-fu4" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="/services" className="tv-btn-primary">Наши услуги</a>
                <a href="/team" className="tv-btn-sec">Команда</a>
              </div>
            </div>

            {/* Right — Logo */}
            <div className="tv-fu5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="tv-logo-float" style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", inset: "-40px",
                  background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)",
                  borderRadius: "50%",
                }} />
                <img
                  src={LOGO_URL}
                  alt="TrVesper Logo"
                  style={{ width: "clamp(260px, 30vw, 420px)", height: "auto", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 32px rgba(0,229,255,0.3))" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0d1020", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 48px" }}>
          <div className="tv-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
            {STATS.map((s, i) => (
              <div key={i} className="tv-stat-card">
                <div style={{
                  fontSize: "clamp(40px, 4vw, 56px)", fontWeight: 700, letterSpacing: "-2px",
                  color: "#00e5ff", lineHeight: 1, marginBottom: "8px",
                  fontFamily: "'Oswald', sans-serif",
                }}>{s.value}</div>
                <div style={{
                  fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                  fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: "60px" }}>
            <div style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
              marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px",
            }}>
              <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
              ЧЕМ МЫ ЗАНИМАЕМСЯ
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "-1px", margin: 0,
            }}>Наши направления</h2>
          </div>

          <div className="tv-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="tv-service-card" style={{ "--card-color": s.color } as React.CSSProperties}>
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 500,
                  letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px",
                  color: "#ccc",
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "'IBM Plex Sans', sans-serif", color: "#444", fontSize: "14px",
                  lineHeight: 1.8, margin: 0,
                }}>{s.desc}</p>
                <div className="tv-card-bar" />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <a href="/services" className="tv-btn-primary">Все услуги →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0d1020", borderTop: "1px solid #1a1a2e", padding: "100px 48px",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
            marginBottom: "24px",
          }}>ГОТОВЫ НАЧАТЬ?</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "-1px",
            margin: "0 0 20px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto",
          }}>
            Обсудим ваш проект
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "15px",
            lineHeight: 1.8, marginBottom: "40px",
          }}>
            Разработка торговых алгоритмов, веб-проекты или консультация по трейдингу
          </p>
          <a href="/contacts" className="tv-btn-primary">Связаться с нами</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #1a1a2e", padding: "40px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "20px",
      }}>
        <span style={{
          fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "1px",
        }}>Tr<span style={{ color: "#00e5ff" }}>Vesper</span></span>
        <span style={{
          fontFamily: "'IBM Plex Sans', sans-serif", color: "#2a2a3a", fontSize: "11px",
          letterSpacing: "2px", textTransform: "uppercase",
        }}>© 2024 TrVesper. Все права защищены.</span>
        <div style={{ display: "flex", gap: "32px" }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
              textDecoration: "none", transition: "color 0.2s",
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
