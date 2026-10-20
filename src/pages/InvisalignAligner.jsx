import "../assets/styles/InvisalignAligner.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import SEO from "../components/SEO";
import translations from "../translat/invisalignAligner";

import AlignersImage from "../images/optimized/invisible-aligner.webp";
import ScannerImage from "../images/optimized/digital-scanner.webp";
import DoctorImage from "../images/optimized/doctor.webp";
import AlignerModelImage from "../images/optimized/aligner-model.webp";
import RetentionImage from "../images/optimized/retention.webp";
import AlignerVideo from "../videos/aligner-video.webm";

const InvisalignAligner = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.de;
  const isGerman = language === "de";

  return (
    <main className="ia-page">
      <SEO
        title={t.seo.title}
        description={t.seo.description}
        ogTitle={t.seo.title}
        canonical="https://www.drloutfi.at/invisalign-aligner-wien"
      />

      {/* Hero */}
      <section className="ia-hero">
        <div className="ia-hero-copy">
          <nav className="ia-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{isGerman ? "Startseite" : "Home"}</Link>
            <span aria-hidden="true">›</span>
            <Link to="/treatment">
              {isGerman ? "Behandlungen" : "Treatments"}
            </Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">
              {isGerman
                ? "Invisalign & Aligner"
                : "Invisalign & Clear Aligners"}
            </span>
          </nav>

          <span className="ia-eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>

          <Link className="ia-button" to="/booking">
            {t.hero.button}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="ia-hero-image">
          <img
            src={AlignersImage}
            alt={
              isGerman
                ? "Transparenter Aligner zur Zahnkorrektur"
                : "Clear aligner for discreet teeth straightening"
            }
            fetchPriority="high"
          />
        </div>
      </section>

      {/* What are aligners? */}
      <section className="ia-section ia-intro">
        <div className="ia-intro-copy">
          <span className="ia-eyebrow">{t.intro.eyebrow}</span>
          <h2>{t.intro.title}</h2>
          <p>{t.intro.description}</p>
        </div>

        <video
          className="ia-intro-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={AlignersImage}
          width="960"
          height="720"
          aria-label={
            isGerman
              ? "Video über transparente Zahnschienen"
              : "Video about clear dental aligners"
          }
        >
          <source src={AlignerVideo} type="video/webm" />
        </video>

        {/* Benefits heading and cards */}
        <div className="ia-benefits-wrapper">
          <div className="ia-heading">
            <span className="ia-eyebrow">{t.benefits.eyebrow}</span>
            <h2>{t.benefits.title}</h2>
          </div>

          <div className="ia-benefits">
            {t.benefits.items.map((item) => (
              <article className="ia-card" key={item.title}>
                <span className="ia-card-mark" aria-hidden="true">
                  ✳
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment process */}

      {/* Treatment process */}
      <section className="ia-section ia-process-section">
        <div className="ia-heading">
          <span className="ia-eyebrow">{t.process.eyebrow}</span>
          <h2>{t.process.title}</h2>
        </div>

        <div className="ia-process">
          {t.process.items.map((step, index) => {
            const images = [
              DoctorImage,
              ScannerImage,
              AlignerModelImage,
              AlignersImage,
              RetentionImage,
            ];

            const imageAlt = [
              isGerman ? "Beratung beim Zahnarzt" : "Dental consultation",
              isGerman ? "Digitaler Zahnerscan" : "Digital dental scan",
              isGerman ? "Aligner-Modell" : "Aligner model",
              isGerman ? "Transparente Zahnschienen" : "Clear aligners",
              isGerman ? "Zahnschiene zur Retention" : "Dental retainer",
            ];

            return (
              <article className="ia-step" key={step.title}>
                <span className="ia-step-number">{index + 1}</span>

                <div className="ia-step-image-wrap">
                  <img
                    className={`ia-step-image ${
                      index === 0 ? "ia-step-image-doctor" : ""
                    }`}
                    src={images[index]}
                    alt={imageAlt[index]}
                    loading="lazy"
                  />
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>

                {index < t.process.items.length - 1 && (
                  <span className="ia-step-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Suitability and Invisalign explanation */}
      <section className="ia-section ia-two-column">
        <div>
          <span className="ia-eyebrow">{t.suitability.eyebrow}</span>
          <h2>{t.suitability.title}</h2>
          <p>{t.suitability.description}</p>

          <Link className="ia-text-link" to="/faq">
            {t.suitability.link}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          <span className="ia-eyebrow">{t.comparison.eyebrow}</span>
          <h2>{t.comparison.title}</h2>
          <p>{t.comparison.description}</p>
        </div>
      </section>

      {/* Local practice and doctor */}
      <section className="ia-local">
        <img
          src={DoctorImage}
          alt={
            isGerman
              ? "Dr. Shadi Loutfi in seiner kieferorthopädischen Praxis"
              : "Dr. Shadi Loutfi at his orthodontic practice"
          }
          loading="lazy"
        />

        <div>
          <span className="ia-eyebrow">{t.local.eyebrow}</span>
          <h2>{t.local.title}</h2>
          <p>{t.local.description}</p>
          <p>
            <strong>Dr. Shadi Loutfi</strong>
            <br />
            {t.local.address}
          </p>
        </div>
      </section>

      {/* Final booking CTA */}
      <section className="ia-final-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.description}</p>

        <Link className="ia-button ia-button-light" to="/booking">
          {t.cta.button}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
};

export default InvisalignAligner;
