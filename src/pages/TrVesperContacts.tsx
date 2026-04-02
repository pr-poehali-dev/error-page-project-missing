import { useState } from "react";

const LOGO_URL =
  "https://cdn.poehali.dev/projects/dbfa48f2-ddc4-43c1-b684-d2d4b335b72f/bucket/cd36aac6-6e66-4d03-81e6-07ffb601a3b4.png";

const NAV_LINKS = [
  { label: "ГЛАВНАЯ", href: "/" },
  { label: "УСЛУГИ", href: "/services" },
  { label: "КОМАНДА", href: "/team" },
  { label: "КОНТАКТЫ", href: "/contacts", active: true },
];

const CONTACTS = [
  {
    type: "telegram",
    label: "Telegram",
    value: "@trvesper",
    href: "https://t.me/trvesper",
    color: "#229ed9",
    icon: "✈",
    desc: "Быстрый ответ в течение часа",
  },
  {
    type: "email",
    label: "Email",
    value: "info@trvesper.ru",
    href: "mailto:info@trvesper.ru",
    color: "#00e5ff",
    icon: "✉",
    desc: "Для официальных обращений",
  },
  {
    type: "vk",
    label: "ВКонтакте",
    value: "vk.com/trvesper",
    href: "https://vk.com/trvesper",
    color: "#4a76a8",
    icon: "◈",
    desc: "Новости и обновления команды",
  },
  {
    type: "channel",
    label: "Telegram-канал",
    value: "TrVesper Channel",
    href: "https://t.me/trvesper_channel",
    color: "#c0ff00",
    icon: "📡",
    desc: "Сигналы, аналитика, публикации",
  },
];

const FAQ = [
  {
    q: "Как заказать торгового робота?",
    a: "Напишите нам в Telegram или по email. Опишите свою стратегию и мы подготовим предложение.",
  },
  {
    q: "Сколько стоит обучение трейдингу?",
    a: "Стоимость зависит от формата (индивидуально или группа) и программы. Уточняйте в личном сообщении.",
  },
  {
    q: "Вы работаете с зарубежными клиентами?",
    a: "Да, работаем с клиентами из СНГ и других стран онлайн.",
  },
  {
    q: "Какие сроки разработки EA?",
    a: "Простой советник — от 3 дней. Сложная система с множеством условий — от 1 недели. Всё согласовывается индивидуально.",
  },
];

export default function TrVesperContacts() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#070b14", minHeight: "100vh", color: "#fff", fontFamily: "'Oswald', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&family=Share+Tech+Mono&display=swap');

        @keyframes cnFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes cnShimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes cnScan { 0% { top:-2px; } 100% { top:100%; } }
        @keyframes cnPulse { 0%,100% { opacity:1; box-shadow:0 0 6px #4ade80; } 50% { opacity:0.5; box-shadow:0 0 12px #4ade80; } }

        .cn-fu1 { animation: cnFadeUp 0.6s ease forwards; animation-delay:0.1s; opacity:0; }
        .cn-fu2 { animation: cnFadeUp 0.6s ease forwards; animation-delay:0.25s; opacity:0; }
        .cn-fu3 { animation: cnFadeUp 0.6s ease forwards; animation-delay:0.4s; opacity:0; }

        .cn-nav-link { transition: color 0.2s; }
        .cn-nav-link:hover { color:#00e5ff !important; }
        .cn-nav-active { color:#00e5ff !important; }

        .cn-shimmer {
          background: linear-gradient(90deg, #00e5ff 0%, #fff 30%, #c0ff00 60%, #00e5ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: cnShimmer 4s linear infinite;
        }

        .cn-scan { position:fixed; left:0; width:100%; height:1px; background:rgba(0,229,255,0.04); animation: cnScan 8s linear infinite; pointer-events:none; z-index:999; }

        .cn-grid-bg {
          position:absolute; inset:0;
          background-image: linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events:none;
        }

        .cn-contact-card {
          border: 1px solid #1a1a2e;
          padding: 32px 28px;
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, background 0.25s;
        }
        .cn-contact-card::before {
          content:'';
          position:absolute;
          top:0; left:0; width:3px; height:100%;
          background: var(--cc, #00e5ff);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: bottom;
        }
        .cn-contact-card:hover { border-color: var(--cc, #00e5ff)44; background: rgba(0,229,255,0.03); }
        .cn-contact-card:hover::before { transform: scaleY(1); }

        .cn-arrow {
          transition: transform 0.25s, opacity 0.25s;
          opacity: 0;
        }
        .cn-contact-card:hover .cn-arrow { transform: translateX(4px); opacity: 1; }

        .cn-online-dot {
          width:8px; height:8px; border-radius:50%;
          background: #4ade80;
          animation: cnPulse 2s ease infinite;
          display:inline-block;
        }

        .cn-faq-item {
          border-bottom: 1px solid #1a1a2e;
          overflow: hidden;
        }
        .cn-faq-question {
          padding: 20px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
          transition: color 0.2s;
        }
        .cn-faq-question:hover { color: #00e5ff; }

        .cn-info-row {
          display:flex; align-items:center; justify-content:space-between;
          padding: 14px 0;
          border-bottom: 1px solid #141420;
        }
        .cn-info-row:last-child { border-bottom: none; }

        @media (max-width:768px) {
          .cn-main-grid { grid-template-columns: 1fr !important; }
          .cn-contacts-grid { grid-template-columns: 1fr !important; }
          .cn-nav-links { display:none !important; }
          .cn-menu-btn { display:flex !important; }
        }
      `}</style>

      <div className="cn-scan" />

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
            Tr<span className="cn-shimmer">Vesper</span>
          </span>
        </a>
        <div className="cn-nav-links" style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={`cn-nav-link ${l.active ? "cn-nav-active" : ""}`} style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
              letterSpacing: "3px", color: l.active ? "#00e5ff" : "#444", textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </div>
        <button className="cn-menu-btn" onClick={() => setMenuOpen(true)} style={{
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
        <div className="cn-grid-bg" />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
          <div className="cn-fu1" style={{
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
            marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ width: "32px", height: "1px", background: "#00e5ff44" }} />
            СВЯЗАТЬСЯ С НАМИ
          </div>
          <h1 className="cn-fu2" style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "-2px", margin: "0 0 20px",
          }}>Контакты</h1>
          <p className="cn-fu3" style={{
            fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "16px",
            lineHeight: 1.8, maxWidth: "500px", margin: 0,
          }}>
            Готовы обсудить ваш проект, стратегию или ответить на вопросы. Выберите удобный способ связи.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: "40px 0 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="cn-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            {/* LEFT — Contacts */}
            <div>
              <div style={{
                fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
                fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
                marginBottom: "24px",
              }}>Способы связи</div>

              <div className="cn-contacts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "40px" }}>
                {CONTACTS.map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="cn-contact-card"
                    style={{ "--cc": c.color } as React.CSSProperties}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                      <div style={{
                        width: "36px", height: "36px", border: `1px solid ${c.color}33`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: c.color, fontSize: "16px",
                      }}>{c.icon}</div>
                      <span className="cn-arrow" style={{ color: c.color, fontSize: "16px" }}>→</span>
                    </div>
                    <div style={{
                      fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
                      fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
                      marginBottom: "4px",
                    }}>{c.label}</div>
                    <div style={{
                      fontFamily: "'Oswald', sans-serif", fontSize: "15px",
                      color: "#aaa", marginBottom: "8px",
                    }}>{c.value}</div>
                    <div style={{
                      fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
                      fontSize: "11px", lineHeight: 1.5,
                    }}>{c.desc}</div>
                  </a>
                ))}
              </div>

              {/* Online status */}
              <div style={{
                border: "1px solid #1a1a2e", padding: "20px 24px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <span className="cn-online-dot" />
                <span style={{
                  fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                  fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
                }}>Команда доступна · отвечаем в течение часа</span>
              </div>
            </div>

            {/* RIGHT — Info + FAQ */}
            <div>
              {/* Info block */}
              <div style={{
                fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
                fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
                marginBottom: "24px",
              }}>Режим работы</div>

              <div style={{ border: "1px solid #1a1a2e", padding: "28px", marginBottom: "40px" }}>
                {[
                  { label: "Время ответа", value: "до 1 часа" },
                  { label: "Рабочие дни", value: "Пн — Вс" },
                  { label: "Часовой пояс", value: "UTC+5" },
                  { label: "Локация", value: "Россия / Оренбург" },
                  { label: "Формат работы", value: "Онлайн" },
                ].map((item, i) => (
                  <div key={i} className="cn-info-row">
                    <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#444", fontSize: "12px" }}>{item.label}</span>
                    <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "#666", fontSize: "13px" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div style={{
                fontFamily: "'IBM Plex Sans', sans-serif", color: "#333",
                fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase",
                marginBottom: "24px",
              }}>Частые вопросы</div>

              <div style={{ border: "1px solid #1a1a2e" }}>
                {FAQ.map((item, i) => (
                  <div key={i} className="cn-faq-item">
                    <div
                      className="cn-faq-question"
                      style={{ padding: "18px 24px" }}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span style={{
                        fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px",
                        color: openFaq === i ? "#00e5ff" : "#888",
                        transition: "color 0.2s",
                      }}>{item.q}</span>
                      <span style={{ color: "#333", fontSize: "16px", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                    </div>
                    {openFaq === i && (
                      <div style={{ padding: "0 24px 20px" }}>
                        <p style={{
                          fontFamily: "'IBM Plex Sans', sans-serif", color: "#444",
                          fontSize: "13px", lineHeight: 1.8, margin: 0,
                        }}>{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section style={{
        background: "#0d1020", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e",
        padding: "80px 48px",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "5px", color: "#00e5ff66", textTransform: "uppercase",
            marginBottom: "32px",
          }}>ОТ ОСНОВАТЕЛЯ</div>

          <div style={{
            width: "64px", height: "64px", border: "1px solid #00e5ff44",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px",
            fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700,
            color: "#00e5ff",
          }}>AL</div>

          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif", color: "#555",
            fontSize: "16px", lineHeight: 2, marginBottom: "24px",
            fontStyle: "italic",
          }}>
            «TrVesper — это не просто команда. Это место, где трейдинг и технологии работают вместе.
            Мы открыты для новых проектов, партнёрств и идей. Напишите нам.»
          </p>

          <div style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "16px", color: "#888",
            letterSpacing: "2px",
          }}>Андрей Литвинов · Founder</div>
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
