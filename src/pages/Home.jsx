import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.css";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../translat/translations";
import FirstImage from "../images/First.png";
import DoctorImage from "../images/doctorshadi.png";
import AlignersImage from "../images/Invisiblealigner.jpg";
import FixedBracesImage from "../images/FixedBraces.png";
import ChildrenImage from "../images/ChildrenTeenagers.jpg";
import DigitalScanningImage from "../images/Digitaler3DScanner.png";
import ModJawImage from "../images/Modjaw.png";
import DVTImage from "../images/3DImagingDVT.png";
import GoogleReviews from "./GoogleReviews.jsx";

const Home = () => {
  const navigate = useNavigate();
  const goToBooking = () => {
    navigate("/booking");
  };

  /* =========================================================
      LANGUAGE
  ========================================================= */

  const { language } = useLanguage();

  const t = translations?.[language] ?? translations?.en ?? {};

  /* =========================================================
      HTML LANGUAGE
  ========================================================= */

  useEffect(() => {
    document.documentElement.lang = language;

    return () => {
      document.documentElement.lang = "en";
    };
  }, [language]);

  /* =========================================================
      SAFE FEATURES
  ========================================================= */

  const features = Array.isArray(t.features) ? t.features : [];

  /* =========================================================
      SCROLL TO TREATMENTS
  ========================================================= */

  const scrollToTreatments = () => {
    document.getElementById("hm-treatments")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
      SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".hm-reveal");

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hm-is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  // RETURN

  return (
    <main className="hm-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hm-hero">
        <div className="hm-hero-background-circle"></div>

        {/* HERO CONTENT */}

        <div className="hm-hero-content">
          <div className="hm-hero-label">
            <span></span>

            {t.heroLabel}
          </div>

          <h1 className="hm-hero-title">
            {t.heroTitleBefore} <em>{t.heroTitleHighlight}</em>{" "}
            {t.heroTitleAfter}
          </h1>

          <p className="hm-hero-text">{t.heroText}</p>

          {/* HERO BUTTONS */}

          <div className="hm-hero-buttons">
            <button
              className="hm-primary-button"
              type="button"
              onClick={goToBooking}
            >
              {t.bookAppointment}

              <span>→</span>
            </button>

            <button
              className="hm-secondary-button"
              type="button"
              onClick={scrollToTreatments}
            >
              {t.discoverClinic}
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}

        <div className="hm-hero-image-wrapper">
          <div className="hm-hero-image-decoration"></div>

          <img
            src={FirstImage}
            alt={t.heroImageAlt}
            className="hm-hero-image"
          />

          {/* HERO BADGE */}

          <div className="hm-hero-badge">
            <div>
              <strong>{t.healthySmile}</strong>

              <span>{t.beautifulResults}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCTOR SECTION (IMAGE ON LEFT / TEXT ON RIGHT)
      ===================================================== */}

      <section className="hm-doctor-section hm-reveal">
        <div className="hm-doctor-container">
          {/* Doctor Content / Text (النص أصبح على اليسار) */}
          <div className="hm-doctor-content">
            <div className="hm-doctor-label">
              <span></span>
              {t.doctorSectionLabel || "IHRE KIEFERORTHOPÄDIE"}
            </div>

            <h2 className="hm-doctor-title">
              {t.doctorSectionTitleBefore}{" "}
              <em>{t.doctorSectionTitleHighlight}</em>
            </h2>

            <p className="hm-doctor-text">{t.doctorSectionText}</p>
          </div>

          {/* Doctor Image Wrapper (الصورة أصبحت على اليمين) */}
          <div className="hm-doctor-image-wrapper">
            <img
              src={DoctorImage}
              alt="Dr. Shadi Loutfi"
              className="hm-doctor-image"
            />
          </div>
        </div>
      </section>
      {/* =====================================================
          ORTHODONTICS / TREATMENTS
      ===================================================== */}

      <section className="hm-orthodontics" id="hm-treatments">
        {/* SECTION INTRO */}

        <div className="hm-orthodontics-intro hm-reveal">
          <div className="hm-section-label">{t.orthodonticsLabel}</div>

          <h2 className="hm-orthodontics-title">
            {t.orthodonticsTitleBefore}{" "}
            <span>{t.orthodonticsTitleHighlight}</span>
          </h2>

          <p className="hm-orthodontics-text">{t.orthodonticsIntro}</p>
        </div>

        {/* ===================================================
            TREATMENT CARDS
        =================================================== */}

        <div className="hm-treatment-grid hm-reveal">
          {/* 01 - INVISIBLE ALIGNERS */}

          <article className="hm-treatment-card">
            <div className="hm-treatment-image-wrapper">
              <img
                src={AlignersImage}
                alt={t.treatmentAlignersTitle}
                className="hm-treatment-image"
                loading="lazy"
              />

              <span className="hm-card-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="hm-treatment-content">
              <span className="hm-treatment-number">01</span>

              <h3 className="hm-treatment-title">{t.treatmentAlignersTitle}</h3>

              <p className="hm-treatment-text">{t.treatmentAlignersText}</p>
            </div>
          </article>

          {/* 02 - FIXED BRACES */}

          <article className="hm-treatment-card">
            <div className="hm-treatment-image-wrapper">
              <img
                src={FixedBracesImage}
                alt={t.treatmentFixedBracesTitle}
                className="hm-treatment-image"
                loading="lazy"
              />

              <span className="hm-card-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="hm-treatment-content">
              <span className="hm-treatment-number">02</span>

              <h3 className="hm-treatment-title">
                {t.treatmentFixedBracesTitle}
              </h3>

              <p className="hm-treatment-text">{t.treatmentFixedBracesText}</p>
            </div>
          </article>

          {/* 03 - CHILDREN & TEENAGERS */}

          <article className="hm-treatment-card">
            <div className="hm-treatment-image-wrapper">
              <img
                src={ChildrenImage}
                alt={t.treatmentChildrenTitle}
                className="hm-treatment-image"
                loading="lazy"
              />

              <span className="hm-card-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <div className="hm-treatment-content">
              <span className="hm-treatment-number">03</span>

              <h3 className="hm-treatment-title">{t.treatmentChildrenTitle}</h3>

              <p className="hm-treatment-text">{t.treatmentChildrenText}</p>
            </div>
          </article>
        </div>

        {/* ===================================================
            DIAGNOSTICS
        ================================================== */}

        <div className="hm-diagnostics-section hm-reveal">
          {/* DIAGNOSTICS HEADER */}

          <div className="hm-diagnostics-heading">
            <span className="hm-ortho-small-label">{t.diagnosticsLabel}</span>

            <h3 className="hm-diagnostics-title">{t.diagnosticsTitle}</h3>

            <p className="hm-diagnostics-text">{t.diagnosticsText}</p>
          </div>

          {/* DIAGNOSTICS GRID */}

          <div className="hm-diagnostics-grid">
            {/* 01 - DIGITAL SCANNING */}

            <article className="hm-diagnostic-card">
              <div className="hm-diagnostic-image-wrapper">
                <img
                  src={DigitalScanningImage}
                  alt={t.digitalScanningTitle}
                  className="hm-diagnostic-image"
                  loading="lazy"
                />
              </div>

              <div className="hm-diagnostic-content">
                <span className="hm-diagnostic-number">01</span>

                <h4 className="hm-diagnostic-title">
                  {t.digitalScanningTitle}
                </h4>

                <p className="hm-diagnostic-text">{t.digitalScanningText}</p>
              </div>
            </article>

            {/* 02 - MODJAW */}

            <article className="hm-diagnostic-card">
              <div className="hm-diagnostic-image-wrapper">
                <img
                  src={ModJawImage}
                  alt={t.modJawTitle}
                  className="hm-diagnostic-image"
                  loading="lazy"
                />
              </div>

              <div className="hm-diagnostic-content">
                <span className="hm-diagnostic-number">02</span>

                <h4 className="hm-diagnostic-title">{t.modJawTitle}</h4>

                <p className="hm-diagnostic-text">{t.modJawText}</p>
              </div>
            </article>

            {/* 03 - DVT */}

            <article className="hm-diagnostic-card">
              <div className="hm-diagnostic-image-wrapper">
                <img
                  src={DVTImage}
                  alt={t.dvtTitle}
                  className="hm-diagnostic-image"
                  loading="lazy"
                />
              </div>

              <div className="hm-diagnostic-content">
                <span className="hm-diagnostic-number">03</span>

                <h4 className="hm-diagnostic-title">{t.dvtTitle}</h4>

                <p className="hm-diagnostic-text">{t.dvtText}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BOOKING BUTTON */}

      <div className="hm-booking-area">
        <button
          className="hm-booking-button"
          type="button"
          onClick={goToBooking}
        >
          <span className="hm-booking-text">{t.bookAppointment}</span>

          <span className="hm-booking-arrow">→</span>
        </button>
      </div>

      {/* =====================================================
          PROMISE / THREE VALUES
      ===================================================== */}

      <section className="hm-features">
        {/* FEATURES HEADING */}

        <div className="hm-features-heading">
          <div className="hm-section-label">{t.promiseLabel}</div>

          <p>{t.promiseText}</p>
        </div>

        {/* FEATURE GRID */}

        <div className="hm-feature-grid">
          {features.slice(0, 3).map((feature, index) => (
            <article className="hm-feature" key={index}>
              <div className="hm-feature-top">
                <div className="hm-feature-icon">{feature?.icon}</div>

                <span className="hm-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{feature?.title}</h3>

              <p>{feature?.text}</p>

              <div className="hm-feature-arrow">→</div>
            </article>
          ))}
        </div>
      </section>
      {/* صفحه حوحول  */}
      <GoogleReviews />
      {/* =====================================================
          PERSONAL CARE
      ===================================================== */}

      <section className="hm-personal-care hm-reveal">
        <div className="hm-personal-care-content">
          <h2>{t.personalCareTitle}</h2>

          <p>{t.personalCareText}</p>
        </div>
      </section>

      {/* =====================================================
          LANGUAGES
      ===================================================== */}

      <section className="hm-languages hm-reveal">
        <div className="hm-languages-content">
          <div className="hm-section-label">{t.languagesTitle}</div>

          <h2>{t.languagesTitle}</h2>

          <p>{t.languagesText}</p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="hm-cta" id="hm-appointment">
        <div className="hm-cta-decoration"></div>

        <div className="hm-cta-content">
          <div className="hm-section-label hm-light-label">{t.ctaLabel}</div>

          <h2>
            {t.ctaTitleBefore} <span>{t.ctaTitleHighlight}</span>
          </h2>

          <p>{t.ctaText}</p>

          <button className="hm-cta-button" type="button" onClick={goToBooking}>
            {t.bookAppointment}

            <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
