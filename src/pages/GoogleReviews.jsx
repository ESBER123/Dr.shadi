import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../assets/styles/GoogleReviews.css";

const GoogleReviews = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const content = {
    en: {
      tag: "PATIENT EXPERIENCES",
      titlePart1: "What our patients ",
      titlePart2: "say about us.",
      subtitle:
        "Real experiences from patients who trusted us with their smiles.",
      readAll: "Read all reviews on Google →",
    },
    de: {
      tag: "PATIENTENERFAHRUNGEN",
      titlePart1: "Was unsere Patienten ",
      titlePart2: "über uns sagen.",
      subtitle:
        "Echte Erfahrungen von Patientinnen und Patienten, die uns ihr Lächeln anvertraut haben.",
      readAll: "Alle Bewertungen auf Google ansehen →",
    },
  };

  const t = content[language] || content.en;

  const reviews = [
    {
      id: 1,
      name: "Yulia A.",
      time: "vor 6 Wochen",
      review:
        "Dr. Shadi Loutfi hat meine Behandlung mit dem hochmodernen ModJaw-Gerät geplant. Meine Kieferbewegung wurde in 4D sichtbar gemacht und die Behandlung perfekt auf mich zugeschnitten. Das Ergebnis: ein Lächeln, auf das ich stolz bin, und ein Biss, der sich einfach perfekt anfühlt. Dazu ein herzliches, professionelles Team!",
      initial: "J",
    },
    {
      id: 2,
      name: "Hanna E.",
      time: "vor 7 Tagen",
      review:
        "Ich bin sehr zufrieden mit meiner Behandlung bei Dr. Shadi Loutfi. Das Team ist freundlich, professionell, und man fühlt sich vom ersten Termin an gut aufgehoben. Das Ergebnis ist hervorragend und mein Lächeln hat sich deutlich verbessert.",
      initial: "L",
    },
    {
      id: 3,
      name: "Yamen A.",
      time: "4 weeks ago",
      review:
        "After seeing so many doctors with no answers, Dr. Loutfi finally solved my joint pain. He actually listened, took the time to understand what was going on, and got me the right treatment. I feel like myself again- I can't recommend him enough 😊",
      initial: "U",
    },
    {
      id: 4,
      name: "Marwan D.",
      time: "5 weeks ago",
      review:
        "Dr. Loutfi impressed me. they use a digital scanner instead of messy impressions, so everything was quick and comfortable. It's amazing to see a practice using the latest technology.",
      initial: "V",
    },
    {
      id: 5,
      name: "Anna V.",
      time: "vor 5 Wochen",
      review:
        " Er ist ein wunderbarer Arzt und ein echter Profi auf seinem Gebiet, mit voller Hingabe und großer Aufmerksamkeit für Details. Die Praxis ist bis ins kleinste Detail organisiert, modern ausgestattet und blitzsauber. Meine Invisalign-Behandlung war von Anfang an in den besten Händen.",
      initial: "A",
    },
  ];
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <section
      className="google-reviews-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="reviews-header">
        <span className="reviews-tag">— {t.tag} —</span>
        <h2>
          {t.titlePart1}
          <span className="italic-accent">{t.titlePart2}</span>
        </h2>
        <p className="reviews-subtitle">{t.subtitle}</p>
      </div>

      <div className="reviews-container">
        <button
          className="carousel-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous review"
        >
          ‹
        </button>

        <div className="reviews-track-wrapper">
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${currentIndex * (350 + 20)}px)` }}
          >
            {reviews.map((rev) => (
              <div className="review-card" key={rev.id}>
                <div className="review-card-top">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">{rev.initial}</div>
                    <div>
                      <h4 className="reviewer-name">{rev.name}</h4>
                    </div>
                  </div>
                  <div className="google-icon-badge">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.15 21.32 7.23 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.18C.43 8.12 0 9.82 0 12s.43 3.88 1.18 5.4l4.09-3.16z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.15 2.68 1.18 6.6l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="review-stars">{"★★★★★"}</div>

                <p className="review-text">"{rev.review}"</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn next-btn"
          onClick={handleNext}
          aria-label="Next review"
        >
          ›
        </button>
      </div>

      <div className="google-footer-rating">
        <span className="g-logo-letter">G</span>
        <span className="footer-stars">★★★★★</span>
        <span className="footer-score">5.0</span>
        <span className="footer-source">on Google</span>
        <span className="footer-count">{t.basedOn}</span>
      </div>

      <div className="read-all-container">
        <a
          href="https://share.google/P69qOXQaVMMIAr5A1"
          target="_blank"
          rel="noopener noreferrer"
          className="read-all-link"
        >
          {t.readAll}
        </a>
      </div>
    </section>
  );
};

export default GoogleReviews;
