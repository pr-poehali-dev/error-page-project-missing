import { useState } from "react";

const Trading = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const certs: { id: number; title: string; firm: string; amount: string; date: string; img?: string }[] = [];

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", fontFamily: "'Oswald', sans-serif", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUpTr {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tr-fu1 { animation: fadeUpTr 0.55s ease forwards; animation-delay: 0.05s; opacity: 0; }
        .tr-fu2 { animation: fadeUpTr 0.55s ease forwards; animation-delay: 0.15s; opacity: 0; }
        .tr-fu3 { animation: fadeUpTr 0.55s ease forwards; animation-delay: 0.25s; opacity: 0; }
        .tr-fu4 { animation: fadeUpTr 0.55s ease forwards; animation-delay: 0.35s; opacity: 0; }
        .tr-fu5 { animation: fadeUpTr 0.55s ease forwards; animation-delay: 0.45s; opacity: 0; }
        .tr-fu6 { animation: fadeUpTr 0.55s ease forwards; animation-delay: 0.55s; opacity: 0; }

        .tr-stat-card { border: 1px solid #1a1a1a; padding: 24px 16px; text-align: center; }
        .tr-skill-card { border: 1px solid #1a1a1a; padding: 28px 24px; }
        .tr-skill-card:hover { border-color: #333; }

        .tr-cert-card {
          border: 1px solid #1a1a1a;
          padding: 0;
          overflow: hidden;
          transition: border-color 0.2s;
          cursor: pointer;
        }
        .tr-cert-card:hover { border-color: #4a9eff; }

        .tr-cert-placeholder {
          background: #111;
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          border-bottom: 1px solid #1a1a1a;
        }

        .lightbox-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.95);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; cursor: zoom-out;
        }
        .lightbox-overlay img { max-width: 90vw; max-height: 90vh; object-fit: contain; }

        .tr-quote-block {
          border: 1px solid #1f1f1f;
          padding: 40px 48px;
          margin-top: 80px;
        }

        @media (max-width: 640px) {
          .tr-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .tr-skills-grid { grid-template-columns: 1fr !important; }
          .tr-certs-grid { grid-template-columns: 1fr !important; }
          .tr-quote-block { padding: 28px 24px; }
        }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 32px 100px" }}>

        {/* Метка */}
        <div
          className="tr-fu1"
          style={{ color: "#444", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", marginBottom: "32px" }}
        >
          — 03 / ТОРГОВЛЯ
        </div>

        {/* Заголовок */}
        <h1 className="tr-fu2" style={{ fontSize: "clamp(40px, 10vw, 80px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2px", textTransform: "uppercase", margin: "0 0 28px" }}>
          Forex.<br />Ручной трейдинг.
        </h1>

        {/* Бейдж */}
        <div className="tr-fu2" style={{ marginBottom: "28px" }}>
          <span style={{
            border: "1px solid #3a5a8a", color: "#4a9eff",
            fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px",
            letterSpacing: "3px", textTransform: "uppercase",
            padding: "8px 16px", display: "inline-block"
          }}>
            Не алго-трейдинг — только ручная работа
          </span>
        </div>

        {/* Описание */}
        <p className="tr-fu3" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#888", fontSize: "15px", lineHeight: 1.8, maxWidth: "520px", marginBottom: "64px" }}>
          Анализирую рынок самостоятельно, принимаю взвешенные решения на основе структуры цены и потока ликвидности.
        </p>

        {/* Статистика */}
        <div className="tr-fu3 tr-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", marginBottom: "80px" }}>
          {[
            { val: "1+", valColor: "#fff", label: "лет", sub: "на рынке Forex" },
            { val: "Ручной", valColor: "#4a9eff", label: "трейдинг", sub: "без алго-систем" },
            { val: "≤2%", valColor: "#4a9eff", label: "риск", sub: "на каждую сделку" },
            { val: "Мажоры", valColor: "#4a9eff", label: "пары", sub: "EUR/USD, XAU/USD и др." },
          ].map((s, i) => (
            <div key={i} className="tr-stat-card" style={{ background: "#0d0d0d" }}>
              <div style={{ fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 700, color: s.valColor, marginBottom: "4px" }}>{s.val}</div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>{s.label}</div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#333", fontSize: "11px", marginTop: "6px" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Навыки */}
        <div className="tr-fu4 tr-skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#1a1a1a", marginBottom: "80px" }}>
          {[
            { icon: "◎", title: "Price Action", desc: "Читаю рынок без индикаторов — только ликвидность, ордер-блоки и структура рынка." },
            { icon: "⊙", title: "Smart Money Concepts", desc: "Торгую за институциональными деньгами. Торгую против толпы." },
            { icon: "○", title: "Управление рисками", desc: "Торгую по чёткому стоп-лоссу. Сохранение капитала — приоритет." },
            { icon: "⊞", title: "Дневник сделок", desc: "Каждая сделка фиксируется, анализируется и проверяется. Без дневника нет роста — только интуиция, а это не стратегия." },
            { icon: "⊘", title: "Таймфреймы", desc: "Работаю на H4-D1 для контекста, H1 для входов. Swing trading с удержанием позиций от нескольких часов до дней." },
            { icon: "⊕", title: "Психология", desc: "Дисциплина важнее любой стратегии. Не торгую на эмоциях, не усредняюсь в убыток, не гонюсь за рынком." },
          ].map((s, i) => (
            <div key={i} className="tr-skill-card" style={{ background: "#0d0d0d", transition: "border-color 0.2s" }}>
              <div style={{ color: "#333", fontSize: "20px", marginBottom: "16px" }}>{s.icon}</div>
              <div style={{ fontWeight: 500, fontSize: "15px", marginBottom: "10px", letterSpacing: "0.5px" }}>{s.title}</div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "13px", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Цитата */}
        <div className="tr-fu5 tr-quote-block">
          <div style={{ color: "#4a9eff", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px" }}>
            КЛЮЧЕВОЙ ПРИНЦИП
          </div>
          <blockquote style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#ccc", fontSize: "clamp(15px, 2.5vw, 20px)", lineHeight: 1.7, margin: 0 }}>
            "Профессиональный трейдер отличается от любителя не прибыльностью — а последовательностью и управлением рисками."
          </blockquote>
        </div>

        {/* ===== ВЫПЛАТЫ ПО ПРОП-СЧЕТАМ ===== */}
        <div className="tr-fu6" style={{ marginTop: "100px" }}>

          {/* Заголовок секции */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
            <div style={{ color: "#444", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase" }}>
              — 04 / PROP TRADING
            </div>
          </div>

          <h2 style={{ fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 700, letterSpacing: "-1.5px", textTransform: "uppercase", margin: "0 0 12px" }}>
            Выплаты по<br />
            <span style={{ color: "#4a9eff" }}>проп-счетам.</span>
          </h2>

          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#666", fontSize: "14px", lineHeight: 1.8, maxWidth: "480px", marginBottom: "48px" }}>
            Сертификаты выплат от проп-компаний — подтверждение реальных результатов торговли на финансированных счетах.
          </p>

          {/* Сетка сертификатов */}
          {certs.length === 0 ? (
            <div style={{
              border: "1px dashed #1f1f1f",
              padding: "64px 32px",
              textAlign: "center",
            }}>
              <div style={{ color: "#222", fontSize: "32px", marginBottom: "16px" }}>⬜</div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#333", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }}>
                Сертификаты появятся здесь
              </div>
            </div>
          ) : (
            <div className="tr-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#1a1a1a" }}>
              {certs.map((cert) => (
                <div key={cert.id} className="tr-cert-card" style={{ background: "#0d0d0d" }} onClick={() => cert.img && setLightboxImg(cert.img)}>
                  {cert.img ? (
                    <img src={cert.img} alt={cert.title} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
                  ) : (
                    <div className="tr-cert-placeholder">
                      <div style={{ color: "#222", fontSize: "28px" }}>📄</div>
                      <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#333", fontSize: "11px", letterSpacing: "2px" }}>СЕРТИФИКАТ</div>
                    </div>
                  )}
                  <div style={{ padding: "20px 20px 24px" }}>
                    <div style={{ fontWeight: 500, fontSize: "14px", marginBottom: "6px" }}>{cert.title}</div>
                    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#555", fontSize: "12px", letterSpacing: "1px", marginBottom: "12px" }}>{cert.firm}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#4a9eff", fontWeight: 700, fontSize: "16px" }}>{cert.amount}</span>
                      <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#333", fontSize: "11px" }}>{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Лайтбокс */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Сертификат" />
        </div>
      )}
    </div>
  );
};

export default Trading;
