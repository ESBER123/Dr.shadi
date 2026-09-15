import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import faqTranslations from "../translat/faqTranslations";
import "../assets/styles/FAQ.css";

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const t = faqTranslations[language] || faqTranslations.en;

  // Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // FAQ accordion
  const toggleQuestion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="good-page">
      {/* ================= HERO ================= */}
      <section className="good-hero">
        <div className="hero-overlay" />

        <div className="good-hero-content animate-on-scroll">
          <span className="small-label">{t.hero.label}</span>

          <h1>
            {t.hero.title}
            <br />
            <span>{t.hero.titleSecond}</span>
          </h1>

          <p>{t.hero.description}</p>

          <a href="#faq" className="hero-button">
            {t.hero.button}
            <span>↓</span>
          </a>
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="good-intro">
        <div className="intro-text animate-on-scroll">
          <span className="small-label dark-label">{t.intro.label}</span>

          <h2>
            {t.intro.title}
            <br />
            <span>{t.intro.titleSecond}</span>
          </h2>

          <div className="gold-line" />

          <p>{t.intro.text1}</p>
          <p>{t.intro.text2}</p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq-section" id="faq">
        <div className="faq-top animate-on-scroll">
          <div>
            <span className="small-label dark-label">{t.faq.label}</span>

            <h2>
              {t.faq.title}
              <br />
              <span>{t.faq.titleSecond}</span>
            </h2>
          </div>

          <p>{t.faq.description}</p>
        </div>

        <div className="faq-list">
          {t.faq.questions?.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item ${isOpen ? "active" : ""}`} key={index}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-left">
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="question-text">{item.question}</span>
                  </div>

                  <span className="faq-icon">
                    <span />
                    <span />
                  </span>
                </button>

                <div className={`faq-answer ${isOpen ? "answer-open" : ""}`}>
                  <div className="answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="good-cta animate-on-scroll">
        <div className="cta-circle" />

        <div className="cta-content">
          <span className="small-label">{t.cta.label}</span>

          <h2>
            {t.cta.title}
            <br />
            <span>{t.cta.titleSecond}</span>
          </h2>

          <p>{t.cta.description}</p>

          <a href="/booking" className="cta-button">
            {t.cta.button}
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
