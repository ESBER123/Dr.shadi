import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { aboutTranslations } from "../translat/aboutTranslations";
import shadiImage from "../images/doctor.png";
import claudiaImage from "../images/DrClaudiaAichingerPfandl.png";
import "../assets/styles/About.css";

const DoctorInfo = ({
  index,
  image,
  name,
  role,
  quote,
  description,
  languages = [],
  qualifications = [],
  memberships = [],
  reverse = false,
  t,
}) => {
  return (
    <section className={`about-doctor ${reverse ? "reverse" : ""}`}>
      {/* IMAGE */}
      <div className="about-doctor-image">
        <div className="image-frame">
          <img src={image} alt={typeof name === "string" ? name : "Doctor"} />
          <div className="doctor-index">{index}</div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="about-doctor-content">
        <span className="doctor-role">{role}</span>

        <h2>{name}</h2>

        <div className="content-line" />

        <div className="doctor-quote">
          <span className="quote-mark">“</span>
          <p>{quote}</p>
        </div>

        <p className="doctor-description">{description}</p>

        <div className="about-info">
          {languages.length > 0 && (
            <div className="info-block">
              <h4>{t?.languages}</h4>
              <div className="language-tags">
                {languages.map((lang, i) => (
                  <span key={i}>{lang}</span>
                ))}
              </div>
            </div>
          )}

          {qualifications.length > 0 && (
            <div className="info-block">
              <h4>{t?.academic}</h4>
              <ul>
                {qualifications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {memberships.length > 0 && (
            <div className="info-block">
              <h4>{t?.memberships}</h4>
              <ul>
                {memberships.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { language } = useLanguage();
  const t = aboutTranslations[language] || aboutTranslations.en;
  const navigate = useNavigate();

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-label">
          <span className="about-line" />
          {t.navLabel}
        </div>

        <h1>
          {t.heroTitle}
          <br />
          <em>{t.heroHighlight}</em>
        </h1>

        <p>{t.heroText}</p>
      </section>

      {/* DOCTORS INTRO */}
      <section className="doctors-intro">
        <span>{t.doctorsLabel}</span>

        <h2>
          {t.doctorsTitle}
          <br />
          <em>{t.doctorsHighlight}</em>
        </h2>
      </section>

      {/* SHADI */}
      <DoctorInfo
        index="01"
        image={shadiImage}
        name="Dr. Shadi Loutfi"
        role={t.shadiRole}
        quote={t.shadiQuote}
        description={t.shadiDescription}
        languages={t.shadiLanguages}
        qualifications={t.shadiQualifications}
        t={t}
      />

      {/* CLAUDIA */}
      <DoctorInfo
        index="02"
        image={claudiaImage}
        name={
          <>
            Dr. Claudia
            <br />
            Aichinger-Pfandl
          </>
        }
        role={t.claudiaRole}
        quote={t.claudiaQuote}
        description={t.claudiaDescription}
        languages={t.claudiaLanguages}
        qualifications={t.claudiaQualifications}
        memberships={t.claudiaMemberships}
        reverse
        t={t}
      />

      {/* CTA */}
      <section className="about-cta">
        <span>{t.ctaLabel}</span>

        <h2>
          {t.ctaTitle} <em>{t.ctaHighlight}</em>
        </h2>

        <p>{t.ctaText}</p>

        <button onClick={() => navigate("/booking")}>{t.ctaButton}</button>
      </section>
    </main>
  );
};

export default About;
