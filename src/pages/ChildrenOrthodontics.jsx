import "../assets/styles/ChildrenOrthodontics.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext.jsx";

import ChildrenImage from "../images/optimized/children-teenagers.webp";
import DoctorImage from "../images/optimized/doctor.webp";
import ScannerImage from "../images/optimized/digital-scanner.webp";
import BracesSmileImage from "../images/optimized/braces-smile.webp";
import translations from "../translat/childrenOrthodontics";
import FixedBracesImage from "../images/optimized/fixed-braces.webp";
import ModernDentalClinicImage from "../images/optimized/Modern_Dental_Clinic_in_Action.webp";
const ChildrenOrthodontics = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.de;
  const isGerman = language === "de";

  const benefitIcons = ["✳", "⌁", "◇", "♡"];
  const stepImages = [
    DoctorImage,
    ScannerImage,
    FixedBracesImage,
    ModernDentalClinicImage,

    null,
  ];

  return (
    <main className="co-page">
      <SEO
        title={t.seo.title}
        description={t.seo.description}
        ogTitle={t.seo.title}
        canonical="https://www.drloutfi.at/kieferorthopaedie-kinder-wien"
      />

      {/* Hero */}
      <section className="co-hero">
        <div className="co-hero-copy">
          <nav className="co-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{isGerman ? "Startseite" : "Home"}</Link>
            <span aria-hidden="true">›</span>
            <Link to="/treatment">
              {isGerman ? "Behandlungen" : "Treatments"}
            </Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">
              {isGerman
                ? "Kieferorthopädie für Kinder"
                : "Orthodontics for Children"}
            </span>
          </nav>

          <span className="co-eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>

          <Link className="co-button" to="/booking">
            {t.hero.button}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="co-hero-image">
          <img
            src={ChildrenImage}
            alt={
              isGerman
                ? "Kieferorthopädische Betreuung für Kinder und Jugendliche"
                : "Orthodontic care for children and teenagers"
            }
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="co-section co-intro">
        <div className="co-intro-image">
          <img
            src={BracesSmileImage}
            alt={
              isGerman
                ? "Lächeln mit fester Zahnspange"
                : "Smile with fixed braces"
            }
            loading="lazy"
          />
        </div>

        <div className="co-intro-copy">
          <span className="co-eyebrow">{t.intro.eyebrow}</span>
          <h2>{t.intro.title}</h2>
          <p>{t.intro.description}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="co-section co-benefits-section">
        <div className="co-section-heading">
          <span className="co-eyebrow">
            {isGerman ? "IHRE VORTEILE" : "YOUR BENEFITS"}
          </span>
          <h2>
            {isGerman
              ? "Individuelle Kieferorthopädie für junge Patientinnen und Patienten"
              : "Individual orthodontic care for young patients"}
          </h2>
        </div>

        <div className="co-benefits">
          {t.benefits.items.map((benefit, index) => (
            <article className="co-card" key={benefit.title}>
              <span className="co-card-mark" aria-hidden="true">
                {benefitIcons[index % benefitIcons.length]}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Treatment process */}
      <section className="co-process-section">
        <div className="co-section co-process-inner">
          <div className="co-section-heading">
            <span className="co-eyebrow">{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
            <p>{t.process.description}</p>
          </div>

          <div className="co-process">
            {t.process.items.map((step, index) => (
              <article className="co-step" key={step.title}>
                <span className="co-step-number">{index + 1}</span>

                {stepImages[index] && (
                  <img
                    src={stepImages[index]}
                    alt={
                      isGerman
                        ? "Digitaler Scan für die kieferorthopädische Planung"
                        : "Digital scan for orthodontic treatment planning"
                    }
                    loading="lazy"
                  />
                )}

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="co-section co-timing-section">
        <div className="co-timing-content">
          <span className="co-eyebrow">{t.timing.eyebrow}</span>
          <h2>{t.timing.title}</h2>
          <p>{t.timing.description}</p>

          <Link className="co-text-link" to="/faq">
            {t.timing.link}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>

      {/* Local practice */}
      <section className="co-local">
        <img
          src={DoctorImage}
          alt={
            isGerman
              ? "Dr. Shadi Loutfi in seiner kieferorthopädischen Praxis"
              : "Dr. Shadi Loutfi at the orthodontic practice"
          }
          loading="lazy"
        />

        <div>
          <span className="co-eyebrow">{t.local.eyebrow}</span>
          <h2>{t.local.title}</h2>
          <p>{t.local.description}</p>

          <p>
            <strong>Dr. Shadi Loutfi</strong>
            <br />
            {t.local.address}
            <br />
            {t.local.city}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="co-final-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.description}</p>

        <Link className="co-button co-button-light" to="/booking">
          {t.cta.button}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
};

export default ChildrenOrthodontics;
