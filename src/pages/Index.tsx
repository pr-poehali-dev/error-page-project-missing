import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ROLES = ["Веб-разработчик", "Forex-трейдер", "React-инженер", "Fullstack Dev"];

const SERVICES = [
  {
    num: "01",
    title: "Веб-разработка",
    desc: "Сайты и приложения на React + TypeScript. Быстро, чисто, без лишнего.",
    tag: "Frontend / Backend",
  },
  {
    num: "02",
    title: "Forex-трейдинг",
    desc: "Ручная торговля по Price Action и Smart Money. Дисциплина и управление риском.",
    tag: "Финансы / Анализ",
  },
  {
    num: "03",
    title: "Консультации",
    desc: "Разбор технических задач, code-review, архитектура проекта.",
    tag: "Менторинг / Аудит",
  },
];

const STATS = [
  { value: "30×", label: "быстрее среднего разработчика" },
  { value: "≤2%", label: "риск на сделку в трейдинге" },
  { value: "1+", label: "год на рынке Forex" },
  { value: "100%", label: "ручная торговля, без роботов" },
];

export default function Index() {
  const navigate = useNavigate();
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const role = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Parallax mouse
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMousePos({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      style={{
        background: "#070709",
        minHeight: "100vh",
        fontFamily: "'Oswald', sans-serif",
        overflowX: "hidden",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineDraw {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px #4a9eff44; }
          50%       { box-shadow: 0 0 24px #4a9eff88; }
        }
        @keyframes grain {
          0%,100% { transform: translate(0,0); }
          10%      { transform: translate(-2px,2px); }
          30%      { transform: translate(2px,-1px); }
          50%      { transform: translate(-1px,3px); }
          70%      { transform: translate(3px,1px); }
          90%      { transform: translate(-3px,-2px); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes rotateOrb {
          from { transform: rotate(0deg) translateX(160px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
        }
        @keyframes scanSlide {
          0%   { top: -4px; }
          100% { top: 100%; }
        }

        .fu1  { animation: fadeUp 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .fu2  { animation: fadeUp 0.7s ease forwards; animation-delay: 0.25s; opacity: 0; }
        .fu3  { animation: fadeUp 0.7s ease forwards; animation-delay: 0.4s; opacity: 0; }
        .fu4  { animation: fadeUp 0.7s ease forwards; animation-delay: 0.55s; opacity: 0; }
        .fu5  { animation: fadeUp 0.7s ease forwards; animation-delay: 0.7s; opacity: 0; }
        .fu6  { animation: fadeUp 0.7s ease forwards; animation-delay: 0.85s; opacity: 0; }

        .nav-link { transition: color 0.2s; font-family: 'IBM Plex Sans', sans-serif; }
        .nav-link:hover { color: #fff !important; }

        .service-card {
          border: 1px solid #151518;
          background: #0a0a0c;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          cursor: default;
        }
        .service-card:hover {
          border-color: #252530;
          background: #0f0f14;
          transform: translateY(-4px);
        }

        .cta-btn {
          background: #fff;
          color: #070709;
          border: none;
          font-family: 'Oswald', sans-serif;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, color 0.25s, transform 0.2s;
        }
        .cta-btn:hover { background: #4a9eff; color: #fff; transform: translateY(-2px); }

        .outline-btn {
          background: transparent;
          color: #555;
          border: 1px solid #1e1e24;
          font-family: 'Oswald', sans-serif;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.25s, color 0.25s, transform 0.2s;
        }
        .outline-btn:hover { border-color: #4a9eff; color: #4a9eff; transform: translateY(-2px); }

        .stat-card {
          border: 1px solid #111116;
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-card:hover { border-color: #4a9eff33; background: #0b0b10; }

        .grain-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 999;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          animation: grain 0.4s steps(1) infinite;
        }

        .scan-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(74,158,255,0.15) 50%, transparent 100%);
          animation: scanSlide 7s linear infinite;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }

        .tag-pill {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4a9eff;
          border: 1px solid #4a9eff22;
          background: #4a9eff0a;
          padding: 4px 10px;
          display: inline-block;
        }

        .availability-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 10px #4ade8088;
          animation: pulse-glow 2s ease infinite;
          display: inline-block;
        }

        .bottom-bar-link {
          font-family: 'IBM Plex Sans', sans-serif;
          color: #2a2a30;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s;
        }
        .bottom-bar-link:hover { color: #888; }
      `}</style>

      {/* Grain texture */}
      <div className="grain-overlay" />

      {/* ── NAVIGATION ── */}
      <nav
        className="fu1"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #0f0f14",
          background: "rgba(7,7,9,0.85)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            color: "#333",
            letterSpacing: "3px",
          }}
        >
          ⬡ DEV.PORT
        </div>
        <div style={{ display: "flex", gap: "36px" }}>
          {[
            { label: "Главная", href: "/" },
            { label: "Трейдинг", href: "/trading" },
            { label: "Контакты", href: "/contacts" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              style={{
                fontSize: "11px",
                color: "#333",
                textDecoration: "none",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="availability-dot" />
          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "11px",
              color: "#2a2a30",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Доступен
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "0 24px",
        }}
      >
        {/* Ambient orbs */}
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, #4a9eff0d 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
            transition: "transform 0.8s ease",
          }}
        />
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #7c3aed0a 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
            transition: "transform 0.8s ease",
          }}
        />

        <div className="scan-line" />

        {/* Hero grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, width: "100%", textAlign: "center" }}>
          {/* Eyebrow */}
          <div
            className="fu1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div style={{ width: 40, height: 1, background: "#222" }} />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                color: "#333",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Portfolio · 2025
            </span>
            <div style={{ width: 40, height: 1, background: "#222" }} />
          </div>

          {/* Main headline */}
          <h1
            className="fu2"
            style={{
              fontSize: "clamp(56px, 14vw, 120px)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-3px",
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}
          >
            <span style={{ color: "#fff" }}>ДЕЛАЮ</span>
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px #1e1e28",
              }}
            >
              БЫСТРО
            </span>
            <span style={{ color: "#4a9eff" }}>.</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="fu3"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(13px, 2vw, 17px)",
              color: "#4a9eff",
              letterSpacing: "3px",
              marginBottom: "36px",
              minHeight: "28px",
            }}
          >
            {displayed}
            <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
          </div>

          {/* Sub-description */}
          <p
            className="fu3"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "15px",
              color: "#444",
              lineHeight: 1.9,
              maxWidth: 480,
              margin: "0 auto 52px",
              fontWeight: 300,
            }}
          >
            Создаю сайты и веб-приложения в 30× быстрее обычного.
            Параллельно торгую вручную на Forex-рынке.
          </p>

          {/* CTA buttons */}
          <div
            className="fu4"
            style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button
              className="cta-btn"
              style={{ padding: "14px 36px", fontSize: "12px" }}
              onClick={() => navigate("/contacts")}
            >
              Связаться
            </button>
            <button
              className="outline-btn"
              style={{ padding: "14px 36px", fontSize: "12px" }}
              onClick={() => navigate("/trading")}
            >
              Трейдинг →
            </button>
          </div>

          {/* Scroll hint */}
          <div
            className="fu5"
            style={{
              marginTop: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: 1,
                height: 48,
                background: "linear-gradient(to bottom, transparent, #222)",
              }}
            />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px",
                color: "#222",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              scroll
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          borderTop: "1px solid #0f0f14",
          borderBottom: "1px solid #0f0f14",
          padding: "0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                padding: "36px 28px",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid #0f0f14" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "12px",
                  color: "#333",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "120px 40px", maxWidth: 960, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                color: "#333",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              / 01 — Направления
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-1px",
                lineHeight: 1,
                color: "#fff",
                margin: 0,
              }}
            >
              Чем я
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #2a2a35",
                }}
              >
                занимаюсь
              </span>
            </h2>
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              color: "#333",
              maxWidth: 240,
              lineHeight: 1.7,
            }}
          >
            Разработка и торговля — два направления, которые я развиваю параллельно.
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#111116" }}>
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="service-card"
              style={{ padding: "40px 32px", position: "relative" }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "#222",
                  letterSpacing: "3px",
                  marginBottom: "32px",
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0px",
                  color: "#ddd",
                  marginBottom: "16px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "13px",
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                {s.desc}
              </p>
              <span className="tag-pill">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div
        style={{
          borderTop: "1px solid #0f0f14",
          borderBottom: "1px solid #0f0f14",
          padding: "18px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee-inner {
            display: inline-block;
            animation: marquee 22s linear infinite;
          }
        `}</style>
        <div className="marquee-inner">
          {Array(8).fill(null).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "#1a1a22",
                marginRight: "48px",
              }}
            >
              React · TypeScript · Vite · Tailwind · Node.js · Forex · Price Action · Smart Money ·
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT STRIP ── */}
      <section
        style={{
          padding: "120px 40px",
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#333",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            / 02 — О себе
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "32px",
            }}
          >
            Код
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px #2a2a35" }}>и рынки</span>
            <br />— это одно
          </h2>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              color: "#444",
              lineHeight: 1.9,
              marginBottom: "24px",
            }}
          >
            Я разрабатываю веб-продукты с фокусом на скорость и чистоту кода. Одновременно торгую на Forex вручную — без алгоритмов, только Price Action и Smart Money.
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "14px",
              color: "#333",
              lineHeight: 1.9,
            }}
          >
            В обоих направлениях главное — дисциплина, управление рисками и постоянное обучение.
          </p>
        </div>

        {/* Right — terminal block */}
        <div
          style={{
            border: "1px solid #111116",
            background: "#09090c",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              borderBottom: "1px solid #111116",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
            ))}
            <span style={{ fontSize: "10px", color: "#222", marginLeft: 8, letterSpacing: 2 }}>
              profile.json
            </span>
          </div>
          {/* Terminal body */}
          <div style={{ padding: "24px 20px", fontSize: "12px", lineHeight: 2, color: "#333" }}>
            <span style={{ color: "#1e1e28" }}>{"{"}</span>
            <br />
            {"  "}<span style={{ color: "#4a9eff88" }}>"role"</span>
            <span style={{ color: "#222" }}>:</span>{" "}
            <span style={{ color: "#4ade8066" }}>"Frontend Developer"</span>,
            <br />
            {"  "}<span style={{ color: "#4a9eff88" }}>"stack"</span>
            <span style={{ color: "#222" }}>:</span>{" "}
            <span style={{ color: "#4ade8066" }}>"React, TypeScript, Vite"</span>,
            <br />
            {"  "}<span style={{ color: "#4a9eff88" }}>"trading"</span>
            <span style={{ color: "#222" }}>:</span>{" "}
            <span style={{ color: "#4ade8066" }}>"Price Action + SMC"</span>,
            <br />
            {"  "}<span style={{ color: "#4a9eff88" }}>"risk"</span>
            <span style={{ color: "#222" }}>:</span>{" "}
            <span style={{ color: "#c084fc66" }}>"≤ 2% per trade"</span>,
            <br />
            {"  "}<span style={{ color: "#4a9eff88" }}>"speed"</span>
            <span style={{ color: "#222" }}>:</span>{" "}
            <span style={{ color: "#c084fc66" }}>"30x faster"</span>,
            <br />
            {"  "}<span style={{ color: "#4a9eff88" }}>"available"</span>
            <span style={{ color: "#222" }}>:</span>{" "}
            <span style={{ color: "#4ade8088" }}>true</span>
            <br />
            <span style={{ color: "#1e1e28" }}>{"}"}</span>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          borderTop: "1px solid #0f0f14",
          padding: "100px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="orb"
          style={{
            width: 600,
            height: 300,
            background: "radial-gradient(ellipse, #4a9eff08 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "#333",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            / 03 — Контакт
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 8vw, 72px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 1,
              marginBottom: "32px",
              color: "#fff",
            }}
          >
            Есть проект?
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px #1e1e28" }}>
              Давайте поговорим
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "15px",
              color: "#444",
              maxWidth: 400,
              margin: "0 auto 48px",
              lineHeight: 1.8,
            }}
          >
            Открыт для новых задач по разработке и торговым консультациям.
          </p>
          <button
            className="cta-btn"
            style={{ padding: "16px 48px", fontSize: "13px" }}
            onClick={() => navigate("/contacts")}
          >
            Написать мне
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #0f0f14",
          padding: "28px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "#1e1e28",
            letterSpacing: "3px",
          }}
        >
          ⬡ DEV.PORT · 2025
        </div>
        <div style={{ display: "flex", gap: "36px" }}>
          {[
            { label: "Главная", href: "/" },
            { label: "Трейдинг", href: "/trading" },
            { label: "Контакты", href: "/contacts" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="bottom-bar-link">
              {label}
            </a>
          ))}
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px",
            color: "#181820",
            letterSpacing: "2px",
          }}
        >
          Made with React + Vite
        </div>
      </footer>
    </div>
  );
}
