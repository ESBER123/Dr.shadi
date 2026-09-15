import "../assets/styles/Treatment.css";
import { useLanguage } from "../context/LanguageContext.jsx";
import treatmentTranslations from "../translat/treatment.js";

// =========================================================
// IMAGES
// =========================================================

import AlignersBracketsImage from "../images/AlignerandBrackets.png";
import ChildrenTeensImage from "../images/ChildrenTeens.png";
import ScannerImage from "../images/Digitaler3DScanner.png";
import ModjawImage from "../images/Modjaw.png";
import FixedBracesImage from "../images/FixedBraces.png";
import DvtImage from "../images/3DImagingDVT.png";
import ConsultationImage from "../images/treatmentconsultation.png";
import TreatmentHeroGif from "../images/TreatmentHero.gif";

// =========================================================
// TREATMENT PAGE
// =========================================================

const Treatment = () => {
  const { language } = useLanguage();

  // =========================================================
  // LANGUAGE
  // =========================================================

  const currentLanguage = language === "de" ? "de" : "en";

  const t =
    treatmentTranslations?.[currentLanguage] ?? treatmentTranslations?.en;

  // =========================================================
  // BOOKING
  // =========================================================

  const goToBooking = () => {
    window.location.href = "/booking";
  };

  // =========================================================
  // IMAGES
  // =========================================================

  const treatmentImages = [
    AlignersBracketsImage,
    FixedBracesImage,
    ChildrenTeensImage,
  ];

  const diagnosticImages = [ScannerImage, ModjawImage, DvtImage];

  // =========================================================
  // ALT TEXT
  // =========================================================

  const heroAlt =
    currentLanguage === "de"
      ? "Kieferorthopädische Behandlung"
      : "Orthodontic treatment";

  const consultationAlt =
    currentLanguage === "de"
      ? "Moderne kieferorthopädische Beratung"
      : "Modern orthodontic consultation";

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <main className="tr-page" dir="ltr" lang={currentLanguage}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tr-hero">
        <div className="tr-hero-inner">
          {/* HERO CONTENT */}

          <div className="tr-hero-content">
            <span className="tr-eyebrow">{t.hero.eyebrow}</span>

            <h1 className="tr-hero-title">
              <span className="tr-hero-title-main">{t.hero.title}</span>

              <span className="tr-hero-title-accent">{t.hero.titleAccent}</span>
            </h1>

            <p className="tr-hero-description">{t.hero.description}</p>

            <a href="#tr-treatments" className="tr-hero-link">
              <span className="tr-hero-link-text">{t.hero.button}</span>

              <span className="tr-hero-link-arrow" aria-hidden="true">
                ↘
              </span>
            </a>
          </div>

          {/* HERO IMAGE */}

          <div className="tr-hero-visual">
            <div className="tr-hero-image">
              <img src={TreatmentHeroGif} alt={heroAlt} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="tr-intro">
        <div className="tr-intro-label">
          <span>{t.intro.eyebrow}</span>
        </div>

        <div className="tr-intro-content">
          <h2>
            <span className="tr-heading-main">{t.intro.title}</span>

            <em>{t.intro.titleAccent}</em>
          </h2>

          <p>{t.intro.description}</p>
        </div>
      </section>

      {/* =====================================================
          TREATMENTS
      ===================================================== */}

      <section className="tr-treatments" id="tr-treatments">
        <div className="tr-section-heading">
          <div>
            <span className="tr-eyebrow">{t.services.eyebrow}</span>

            <h2>{t.services.title}</h2>
          </div>

          <p>{t.services.description}</p>
        </div>

        {/* TREATMENT CARDS */}

        <div className="tr-treatment-grid">
          {t.services.items.map((item, index) => (
            <article
              className="tr-treatment-card"
              key={`${currentLanguage}-${item.number}`}
            >
              <div className="tr-card-image">
                <img
                  src={treatmentImages[index]}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="tr-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="tr-card-content">
                <span className="tr-card-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          DIAGNOSTICS
      ===================================================== */}

      <section className="tr-diagnostics">
        <div className="tr-diagnostics-inner">
          <div className="tr-diagnostics-header">
            <div className="tr-light-label">
              <span>{t.diagnostics.eyebrow}</span>
            </div>

            <h2>
              <span className="tr-heading-main-light">
                {t.diagnostics.title}
              </span>

              <span className="tr-heading-accent-light">
                {t.diagnostics.titleAccent}
              </span>
            </h2>

            <p>{t.diagnostics.description}</p>
          </div>

          {/* DIAGNOSTIC CARDS */}

          <div className="tr-diagnostics-grid">
            {t.diagnostics.items.map((item, index) => (
              <article
                className="tr-diagnostic-card"
                key={`${currentLanguage}-diagnostic-${item.number}`}
              >
                <div className="tr-diagnostic-image">
                  <img
                    src={diagnosticImages[index]}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="tr-diagnostic-content">
                  <span className="tr-diagnostic-number">{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="tr-cta" id="tr-contact">
        {/* CTA IMAGE */}

        <div className="tr-cta-image">
          <img src={ConsultationImage} alt={consultationAlt} loading="lazy" />
        </div>

        {/* CTA CONTENT */}

        <div className="tr-cta-content">
          <span className="tr-eyebrow">{t.cta.eyebrow}</span>

          <h2>
            <span className="tr-cta-title-main">{t.cta.title}</span>

            <span className="tr-cta-title-accent">{t.cta.titleAccent}</span>

            <span className="tr-cta-title-end">{t.cta.titleEnd}</span>
          </h2>

          <p>{t.cta.description}</p>

          {/* BOOKING BUTTON */}
          <button className="tr-cta-button" type="button" onClick={goToBooking}>
            <span>{t.cta.button}</span>

            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Treatment;
