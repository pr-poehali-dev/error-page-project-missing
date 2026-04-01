const Contact = () => {
  return (
    <div
      style={{
        background: "#0d0d0d",
        minHeight: "100vh",
        fontFamily: "'Oswald', sans-serif",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUpCt {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanlineCt {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ade80; }
          50% { opacity: 0.5; box-shadow: 0 0 12px #4ade80; }
        }

        .ct-scan {
          position: fixed; left: 0; width: 100%; height: 2px;
          background: rgba(255,255,255,0.02);
          animation: scanlineCt 6s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .ct-fu1 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.05s; opacity: 0; }
        .ct-fu2 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.15s; opacity: 0; }
        .ct-fu3 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.25s; opacity: 0; }
        .ct-fu4 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.35s; opacity: 0; }
        .ct-fu5 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.45s; opacity: 0; }
        .ct-fu6 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.55s; opacity: 0; }
        .ct-fu7 { animation: fadeUpCt 0.55s ease forwards; animation-delay: 0.65s; opacity: 0; }

        .ct-nav-link { transition: color 0.2s ease; }
        .ct-nav-link:hover { color: #fff !important; }
        .ct-nav-active { color: #4a9eff !important; }

        .ct-contact-card {
          border: 1px solid #1a1a1a;
          padding: 32px 28px;
          transition: border-color 0.25s ease, background 0.25s ease;
          cursor: pointer;
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
        }
        .ct-contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: transparent;
          transition: background 0.25s ease;
        }
        .ct-contact-card:hover { border-color: #2a2a2a; background: #111; }
        .ct-contact-card.email:hover::before { background: #4a9eff; }
        .ct-contact-card.telegram:hover::before { background: #229ed9; }
        .ct-contact-card.github:hover::before { background: #6e5494; }
        .ct-contact-card.vk:hover::before { background: #4a76a8; }

        .ct-arrow {
          transition: transform 0.25s ease, opacity 0.25s ease;
          opacity: 0;
        }
        .ct-contact-card:hover .ct-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        .ct-input {
          width: 100%;
          background: #0d0d0d;
          border: 1px solid #1a1a1a;
          color: #fff;
          padding: 14px 18px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
          resize: none;
        }
        .ct-input::placeholder { color: #333; }
        .ct-input:focus { border-color: #4a9eff; }

        .ct-submit-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #4a9eff;
          color: #4a9eff;
          padding: 16px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ct-submit-btn:hover { background: #4a9eff; color: #000; }

        .ct-stat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid #141414;
        }
        .ct-stat-row:last-child { border-bottom: none; }

        .ct-tag {
          display: inline-block;
          border: 1px solid #1f1f1f;
          padding: 5px 12px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          color: #444;
          text-transform: uppercase;
        }

        .ct-online-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4ade80;
          animation: pulseGreen 2s ease infinite;
          display: inline-block;
        }

        .ct-topic-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #141414;
          transition: padding-left 0.2s ease;
        }
        .ct-topic-row:last-child { border-bottom: none; }
        .ct-topic-row:hover { padding-left: 8px; }
      `}</style>

      <div className="ct-scan" />

      {/* Навигация */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.95), transparent)",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "2px",
          }}
        >
          AL
          <span style={{ color: "#4a9eff" }}>.</span>
        </a>
        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { label: "ГЛАВНАЯ", href: "/" },
            { label: "БИОГРАФИЯ", href: "/bio" },
            { label: "ПРОЕКТЫ", href: "/projects" },
            { label: "ТОРГОВЛЯ", href: "/trading" },
            { label: "ИНВЕСТИЦИИ", href: "/investments" },
            { label: "КОНТАКТЫ", href: "/contacts", active: true },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`ct-nav-link ${item.active ? "ct-nav-active" : ""}`}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "12px",
                letterSpacing: "3px",
                color: item.active ? "#4a9eff" : "#444",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Основной контент */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "140px 48px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Левая колонка */}
          <div>
            {/* Метка */}
            <div
              className="ct-fu1"
              style={{
                color: "#444",
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ color: "#4a9eff" }}>—</span> 05 / КОНТАКТЫ
            </div>

            {/* Заголовок */}
            <h1
              className="ct-fu2"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "#fff",
                letterSpacing: "-2px",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              Обсудим
              <br />
              проект или
              <br />
              идею?
            </h1>

            <div
              className="ct-fu2"
              style={{
                width: "40px",
                height: "3px",
                background: "#4a9eff",
                marginBottom: "28px",
              }}
            />

            <p
              className="ct-fu3"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                color: "#666",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "40px",
                maxWidth: "360px",
              }}
            >
              Открыт к консультациям по веб-разработке, трейдингу и
              инвестированию. Рассматриваю интересные предложения о
              сотрудничестве.
            </p>

            {/* Статус онлайн */}
            <div
              className="ct-fu3"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid #1a1a1a",
                padding: "10px 20px",
                marginBottom: "48px",
              }}
            >
              <span className="ct-online-dot" />
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Доступен · отвечаю в течение дня
              </span>
            </div>

            {/* По каким вопросам */}
            <div
              className="ct-fu4"
              style={{
                border: "1px solid #1a1a1a",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: "#333",
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                По каким вопросам
              </div>

              {[
                { icon: "⬡", label: "Разработка веб-приложений" },
                { icon: "⬡", label: "Консультация по Forex-трейдингу" },
                { icon: "⬡", label: "Консультация по инвестициям" },
                { icon: "⬡", label: "Совместные проекты" },
              ].map((topic, i) => (
                <div key={i} className="ct-topic-row">
                  <span style={{ color: "#4a9eff", fontSize: "8px" }}>●</span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      color: "#555",
                      fontSize: "13px",
                    }}
                  >
                    {topic.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка — контакты */}
          <div>
            <div
              className="ct-fu5"
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                color: "#333",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Связаться напрямую
            </div>

            {/* Контактные карточки */}
            <div className="ct-fu5" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {/* Email */}
              <a
                href="mailto:al@example.com"
                className="ct-contact-card email"
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    <div style={{
                      width: "40px", height: "40px",
                      border: "1px solid #1f1f1f",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#4a9eff", fontSize: "16px",
                    }}>✉</div>
                    <div>
                      <div style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        color: "#666", fontSize: "10px",
                        letterSpacing: "3px", textTransform: "uppercase",
                        marginBottom: "4px",
                      }}>Email</div>
                      <div style={{
                        fontFamily: "'Oswald', sans-serif",
                        color: "#ccc", fontSize: "16px",
                        letterSpacing: "0.5px",
                      }}>al@example.com</div>
                    </div>
                  </div>
                  <span className="ct-arrow" style={{ color: "#4a9eff", fontSize: "18px" }}>→</span>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-contact-card telegram"
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    <div style={{
                      width: "40px", height: "40px",
                      border: "1px solid #1f1f1f",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#229ed9", fontSize: "16px",
                    }}>✈</div>
                    <div>
                      <div style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        color: "#666", fontSize: "10px",
                        letterSpacing: "3px", textTransform: "uppercase",
                        marginBottom: "4px",
                      }}>Telegram</div>
                      <div style={{
                        fontFamily: "'Oswald', sans-serif",
                        color: "#ccc", fontSize: "16px",
                        letterSpacing: "0.5px",
                      }}>@username</div>
                    </div>
                  </div>
                  <span className="ct-arrow" style={{ color: "#229ed9", fontSize: "18px" }}>→</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-contact-card github"
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    <div style={{
                      width: "40px", height: "40px",
                      border: "1px solid #1f1f1f",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#6e5494", fontSize: "16px",
                    }}>⌥</div>
                    <div>
                      <div style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        color: "#666", fontSize: "10px",
                        letterSpacing: "3px", textTransform: "uppercase",
                        marginBottom: "4px",
                      }}>GitHub</div>
                      <div style={{
                        fontFamily: "'Oswald', sans-serif",
                        color: "#ccc", fontSize: "16px",
                        letterSpacing: "0.5px",
                      }}>github.com/username</div>
                    </div>
                  </div>
                  <span className="ct-arrow" style={{ color: "#6e5494", fontSize: "18px" }}>→</span>
                </div>
              </a>

              {/* VK */}
              <a
                href="https://vk.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-contact-card vk"
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    <div style={{
                      width: "40px", height: "40px",
                      border: "1px solid #1f1f1f",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#4a76a8", fontSize: "16px",
                    }}>◈</div>
                    <div>
                      <div style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        color: "#666", fontSize: "10px",
                        letterSpacing: "3px", textTransform: "uppercase",
                        marginBottom: "4px",
                      }}>ВКонтакте</div>
                      <div style={{
                        fontFamily: "'Oswald', sans-serif",
                        color: "#ccc", fontSize: "16px",
                        letterSpacing: "0.5px",
                      }}>vk.com/username</div>
                    </div>
                  </div>
                  <span className="ct-arrow" style={{ color: "#4a76a8", fontSize: "18px" }}>→</span>
                </div>
              </a>
            </div>

            {/* Статистика доступности */}
            <div
              className="ct-fu7"
              style={{
                border: "1px solid #1a1a1a",
                padding: "24px 28px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: "#333",
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Доступность
              </div>

              {[
                { label: "Время ответа", value: "до 24 часов" },
                { label: "Рабочие дни", value: "Пн — Пт" },
                { label: "Часовой пояс", value: "UTC+5" },
                { label: "Локация", value: "Россия / Оренбург" },
              ].map((item, i) => (
                <div key={i} className="ct-stat-row">
                  <span
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      color: "#444",
                      fontSize: "12px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      color: "#888",
                      fontSize: "14px",
                      fontWeight: 400,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя навигация */}
        <div
          className="ct-fu7"
          style={{
            borderTop: "1px solid #1a1a1a",
            paddingTop: "32px",
            marginTop: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              color: "#2a2a2a",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            © 2024 AL.
          </span>
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { label: "Главная", href: "/" },
              { label: "Проекты", href: "/projects" },
              { label: "Торговля", href: "/trading" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="ct-nav-link"
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: "#333",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;