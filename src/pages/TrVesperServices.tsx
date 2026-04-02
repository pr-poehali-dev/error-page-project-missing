import { useState } from "react";

const LOGO_URL =
  "https://cdn.poehali.dev/projects/dbfa48f2-ddc4-43c1-b684-d2d4b335b72f/bucket/cd36aac6-6e66-4d03-81e6-07ffb601a3b4.png";

const NAV_LINKS = [
  { label: "ГЛАВНАЯ", href: "/" },
  { label: "УСЛУГИ", href: "/services", active: true },
  { label: "КОМАНДА", href: "/team" },
  { label: "КОНТАКТЫ", href: "/contacts" },
];

const TRADING_SERVICES = [
  {
    num: "01",
    title: "Форекс-трейдинг",
    color: "#00e5ff",
    desc: "Профессиональная торговля на валютном рынке Forex. Работаем с основными парами, кросс-курсами и экзотикой. Авторские стратегии, проверенные годами практики.",
    features: ["EUR/USD, GBP/JPY, XAU/USD", "Дневной и интрадей трейдинг", "Управление рисками", "Регулярная аналитика рынка"],
  },
  {
    num: "02",
    title: "Торговые роботы (EA)",
    color: "#c0ff00",
    desc: "Разработка экспертных советников для MetaTrader 4 и 5. Полная автоматизация торговых стратегий — от идеи до работающего алгоритма.",
    features: ["MQL4 / MQL5 разработка", "Бэктестирование на истории", "Оптимизация параметров", "Поддержка и обновление"],
  },
  {
    num: "03",
    title: "Сигналы и аналитика",
    color: "#ff00c8",
    desc: "Ежедневные торговые сигналы по ключевым инструментам. Разборы рынка, уровни входа и выхода, обоснование каждой сделки.",
    features: ["Сигналы в Telegram-канале", "Технический анализ", "Фундаментальный обзор", "Разбор сделок"],
  },
  {
    num: "04",
    title: "Обучение трейдингу",
    color: "#00e5ff",
    desc: "Индивидуальный и групповой менторинг от практикующих трейдеров команды. От основ до профессионального уровня.",
    features: ["Индивидуальные занятия", "Групповые вебинары", "Разбор ошибок", "Сопровождение до результата"],
  },
];

const DEV_SERVICES = [
  {
    num: "05",
    title: "Веб-разработка",
    color: "#c0ff00",
    desc: "Современные сайты, лендинги и веб-приложения. Торговые дашборды, аналитические платформы, CRM для трейдеров.",
    features: ["React / TypeScript", "Торговые дашборды", "Адаптивный дизайн", "SEO-оптимизация"],
  },
  {
    num: "06",
    title: "Индикаторы для MT4/MT5",
    color: "#ff00c8",
    desc: "Разработка кастомных технических индикаторов под любую торговую логику. Визуализация стратегий прямо на графике.",
    features: ["Любая сложность", "Визуальные индикаторы", "Алерты и уведомления", "Интеграция с EA"],
  },
  {
    num: "07",
    title: "Автоматизация и боты",
    color: "#00e5ff",
    desc: "Telegram-боты для трейдеров, парсеры данных, системы мониторинга торговых счетов и уведомлений.",
    features: ["Telegram-боты", "Python скрипты", "Мониторинг счетов", "API-интеграции"],
  },
  {
    num: "08",
    title: "Консультации по IT",
    color: "#c0ff00",
    desc: "Технические консультации по выбору платформ, архитектуре торговых систем и автоматизации бизнес-процессов.",
    features: ["Архитектура систем", "Выбор технологий", "Code review", "Техническое задание"],
  },
];

const PROCESS = [
  { step: "01", title: "Заявка", desc: "Оставляете заявку или пишете нам напрямую" },
  { step: "02", title: "Обсуждение", desc: "Детально обсуждаем задачу и формируем ТЗ" },
  { step: "03", title: "Разработка", desc: "Выполняем работу в оговорённые сроки" },
  { step: "04", title: "Сдача", desc: "Передаём результат, поддержка включена" },
];

export default function TrVesperServices() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "#070b14", minHeight: "100vh", color: "#fff", fontFamily: "'Oswald', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&family=Share+Tech+Mono&display=swap');

        @keyframes svFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes svShimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes svScan { 0% { top:-2px; } 100% { top:100%; } }

        .sv-fu1 { animation: svFadeUp 0.6s ease forwards; animation-delay:0.1s; opacity:0; }
        .sv-fu2 { animation: svFadeUp 0.6s ease forwards; animation-delay:0.25s; opacity:0; }
        .sv-fu3 { animation: svFadeUp 0.6s ease forwards; animation-delay:0.4s; opacity:0; }

        .sv-nav-link { transition: color 0.2s; }
        .sv-nav-link:hover { color:#00e5ff !important; }
        .sv-nav-active { color:#00e5ff !important; }

        .sv-shimmer {
          background: linear-gradient(90deg, #00e5ff 0%, #fff 30%, #c0ff00 60%, #00e5ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: svShimmer 4s linear infinite;
        }

        .sv-service-row {
          border: 1px solid #1a1a2e;
          padding: 40px 36px;
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          gap: 32px;
          align-items: start;
          transition: border-color 0.3s, background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .sv-service-row::before {
          content:'';
          position:absolute;
          left:0; top:0; bottom:0;
          width:3px;
          background: var(--row-color, #00e5ff);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: bottom;
        }
        .sv-service-row:hover { border-color: var(--row-color, #00e5ff)33; background:#00e5ff06; }
        .sv-service-row:hover::before { transform: scaleY(1); }

        .sv-feature-tag {
          display: inline-block;
          border: 1px solid #1a1a2e;
          padding: 5px 14px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px; letter-spacing: 2px;
          color: #444; text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .sv-service-row:hover .sv-feature-tag { border-color: #2a2a3a; color: #666; }

        .sv-process-step {
          border: 1px solid #1a1a2e;
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .sv-process-step:hover { border-color: #00e5ff33; }
        .sv-process-step::after {
          content:'';
          position:absolute;
          top:0; left:0; right:0;
          height:2px;
          background: linear-gradient(90deg, transparent, #00e5ff, transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .sv-process-step:hover::after { transform: translateX(100%); }

        .sv-btn-primary {
          background: linear-gradient(135deg, #00e5ff22, #00e5ff11);
          border: 1px solid #00e5ff;
          color: #00e5ff;
          padding: 14px 36px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 12px; letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: background 0.25s, box-shadow 0.25s;
        }
        .sv-btn-primary:hover { background: #00e5ff22; box-shadow: 0 0 20px #00e5ff44; }

        .sv-scan { position:fixed; left:0; width:100%; height:1px; background:rgba(0,229,255,0.04); animation: svScan 8s linear infinite; pointer-events:none; z-index:999; }

        .sv-grid-bg {
          position:absolute; inset:0;
          background-image: linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events:none;
        }

        .sv-section-tab {
          padding: 10px 24px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          cursor: default;
          border: 1px solid;
        }

        @media (max-width:768px) {
          .sv-service-row { grid-template-columns: 1fr !important; }
          .sv-process-grid { grid-template-columns: 1fr 1fr !important; }
          .sv-nav-links { display:none !important; }
          .sv-menu-btn { display:flex !important; }
        }
      `}</style>

      <div className="sv-scan" />

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
            Tr<span className="sv-shimmer">Vesper</span>
          </span>
        </a>
        <div className="sv-nav-links" style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={`sv-nav-link ${l.active ? "sv-nav-active" : ""}`} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "3px", color: l.active ? "#00e5ff" : "#444", textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </div>
        <button className="sv-menu-btn" onClick={() => setMenuOpen(true)} style={{
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
        <div className="sv-grid-bg" />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
          <div className="sv-fu1" style={{
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
            marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
            ЧТО МЫ ДЕЛАЕМ
          </div>
          <h1 className="sv-fu2" style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "-2px", margin: "0 0 20px",
          }}>Услуги</h1>
          <p className="sv-fu3" style={{
            fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "16px",
            lineHeight: 1.8, maxWidth: "560px", margin: 0,
          }}>
            Два ключевых направления — трейдинг и программирование. Работаем как в связке, так и по отдельности.
          </p>
        </div>
      </section>

      {/* TRADING */}
      <section style={{ padding: "60px 0 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div className="sv-section-tab" style={{ borderColor: "#00e5ff", color: "#00e5ff" }}>📈 ТРЕЙДИНГ</div>
            <div style={{ flex: 1, height: "1px", background: "#1a1a2e" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {TRADING_SERVICES.map((s) => (
              <div key={s.num} className="sv-service-row" style={{ "--row-color": s.color } as React.CSSProperties}>
                <div style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: "28px",
                  color: s.color, lineHeight: 1, opacity: 0.5,
                }}>{s.num}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 500,
                    textTransform: "uppercase", letterSpacing: "1px",
                    color: "#ccc", margin: "0 0 12px",
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                    fontSize: "14px", lineHeight: 1.8, margin: 0,
                  }}>{s.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignContent: "flex-start" }}>
                  {s.features.map((f, i) => (
                    <span key={i} className="sv-feature-tag">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEV */}
      <section style={{ padding: "60px 0 80px", background: "#0d1020", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div className="sv-section-tab" style={{ borderColor: "#c0ff00", color: "#c0ff00" }}>💻 ПРОГРАММИРОВАНИЕ</div>
            <div style={{ flex: 1, height: "1px", background: "#1a1a2e" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {DEV_SERVICES.map((s) => (
              <div key={s.num} className="sv-service-row" style={{ "--row-color": s.color } as React.CSSProperties}>
                <div style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: "28px",
                  color: s.color, lineHeight: 1, opacity: 0.5,
                }}>{s.num}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 500,
                    textTransform: "uppercase", letterSpacing: "1px",
                    color: "#ccc", margin: "0 0 12px",
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                    fontSize: "14px", lineHeight: 1.8, margin: 0,
                  }}>{s.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignContent: "flex-start" }}>
                  {s.features.map((f, i) => (
                    <span key={i} className="sv-feature-tag">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: "60px" }}>
            <div style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
              marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px",
            }}>
              <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
              КАК МЫ РАБОТАЕМ
            </div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "-1px", margin: 0,
            }}>Процесс работы</h2>
          </div>

          <div className="sv-process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
            {PROCESS.map((p, i) => (
              <div key={i} className="sv-process-step">
                <div style={{
                  fontFamily: "'Share Tech Mono', monospace", fontSize: "40px",
                  color: "#00e5ff", opacity: 0.2, lineHeight: 1, marginBottom: "16px",
                }}>{p.step}</div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 500,
                  textTransform: "uppercase", color: "#ccc", margin: "0 0 10px",
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                  fontSize: "13px", lineHeight: 1.8, margin: 0,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "60px", textAlign: "center" }}>
            <a href="/contacts" className="sv-btn-primary">Обсудить проект →</a>
          </div>
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
              fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none",
              transition: "color 0.2s",
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
