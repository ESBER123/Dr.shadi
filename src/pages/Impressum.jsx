import "../assets/styles/Impressum.css";
import { useLanguage } from "../context/LanguageContext";
import impressumTranslations from "../translat/impressum";
const Impressum = () => {
  const { language } = useLanguage();

  const currentLanguage = language === "de" ? "de" : "en";

  const t =
    impressumTranslations?.[currentLanguage] ?? impressumTranslations.en;

  return (
    <main className="im-page" lang={currentLanguage} dir="ltr">
      {/* HERO */}

      <section className="im-hero">
        <div className="im-hero-inner">
          <div className="im-hero-label">
            <span></span>
            {t.heroLabel}
          </div>

          <h1 className="im-hero-title">
            <span>{t.heroTitle}</span>

            <em>{t.heroAccent}</em>
          </h1>

          <p className="im-hero-description">{t.heroDescription}</p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="im-content">
        <div className="im-content-grid">
          {/* SIDEBAR */}

          <aside className="im-sidebar">
            <span className="im-sidebar-label">{t.responsibleLabel}</span>

            <div className="im-sidebar-line"></div>

            <p>{t.responsibleName}</p>
          </aside>

          {/* MAIN */}

          <div className="im-main">
            {/* 01 */}

            <section className="im-section">
              <span className="im-number">01</span>

              <div className="im-section-content">
                <h2>{t.sections.responsible.title}</h2>

                <p className="im-intro-text">{t.sections.responsible.intro}</p>

                <div className="im-contact-card">
                  <h3>Dr. Shadi Loutfi</h3>

                  <p>{t.sections.responsible.practice}</p>

                  <p>
                    {t.sections.responsible.address}
                    <br />
                    {t.sections.responsible.city}
                    <br />
                    {t.sections.responsible.country}
                  </p>
                </div>
              </div>
            </section>

            {/* 02 */}

            <section className="im-section">
              <span className="im-number">02</span>

              <div className="im-section-content">
                <h2>{t.sections.contact.title}</h2>

                <div className="im-contact-list">
                  <a
                    href="mailto:office@drloutfi.at"
                    className="im-contact-item"
                  >
                    <span className="im-contact-label">
                      {t.sections.contact.email}
                    </span>

                    <span className="im-contact-value">office@drloutfi.at</span>
                  </a>

                  <a href="tel:+4367763471705" className="im-contact-item">
                    <span className="im-contact-label">
                      {t.sections.contact.phone}
                    </span>

                    <span className="im-contact-value">+43 677 63471705</span>
                  </a>

                  <a
                    href="https://www.drloutfi.at/impressum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="im-contact-item"
                  >
                    <span className="im-contact-label">
                      {t.sections.contact.website}
                    </span>

                    <span className="im-contact-value">www.drloutfi.at</span>
                  </a>
                </div>
              </div>
            </section>

            {/* 03 */}

            <section className="im-section">
              <span className="im-number">03</span>

              <div className="im-section-content">
                <h2>{t.sections.representation.title}</h2>

                <p>{t.sections.representation.text}</p>
              </div>
            </section>

            {/* 04 */}

            <section className="im-section">
              <span className="im-number">04</span>

              <div className="im-section-content">
                <h2>{t.sections.vat.title}</h2>

                <div className="im-highlight">
                  <span>{t.sections.vat.label}</span>

                  <strong>ATU74535416</strong>
                </div>
              </div>
            </section>

            {/* 05 */}

            <section className="im-section">
              <span className="im-number">05</span>

              <div className="im-section-content">
                <h2>{t.sections.professional.title}</h2>

                <p>{t.sections.professional.text1}</p>

                <p>{t.sections.professional.text2}</p>
              </div>
            </section>

            {/* 06 */}

            <section className="im-section">
              <span className="im-number">06</span>

              <div className="im-section-content">
                <h2>{t.sections.chamber.title}</h2>

                <p>{t.sections.chamber.text}</p>
              </div>
            </section>

            {/* 07 */}

            <section className="im-section">
              <span className="im-number">07</span>

              <div className="im-section-content">
                <h2>{t.sections.contentLiability.title}</h2>

                <p>{t.sections.contentLiability.text}</p>
              </div>
            </section>

            {/* 08 */}

            <section className="im-section">
              <span className="im-number">08</span>

              <div className="im-section-content">
                <h2>{t.sections.links.title}</h2>

                <p>{t.sections.links.text}</p>
              </div>
            </section>

            {/* 09 */}

            <section className="im-section im-section-last">
              <span className="im-number">09</span>

              <div className="im-section-content">
                <h2>{t.sections.privacy.title}</h2>

                <p>{t.sections.privacy.text}</p>

                <a href="/datenschutz" className="im-text-link">
                  {t.sections.privacy.link}

                  <span>→</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* BOTTOM */}

      <section className="im-bottom">
        <div className="im-bottom-inner">
          <span>Dr. Shadi Loutfi</span>

          <span>{t.bottom}</span>
        </div>
      </section>
    </main>
  );
};

export default Impressum;
