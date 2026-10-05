import { useLanguage } from "../context/LanguageContext";
import translations from "../translat/datenschutzTranslations.js";
import "../assets/styles/Datenschutz.css";

const Section = ({ number, section }) => {
  if (!section) return null;

  return (
    <article className="ds-section">
      <div className="ds-section-number">{number}</div>

      <div className="ds-section-content">
        <h2>{section.title}</h2>

        {section.intro && <p>{section.intro}</p>}
        {section.text && <p>{section.text}</p>}
        {section.text1 && <p>{section.text1}</p>}
        {section.text2 && <p>{section.text2}</p>}
        {section.text3 && <p>{section.text3}</p>}
        {section.text4 && <p>{section.text4}</p>}
        {section.text5 && <p>{section.text5}</p>}

        {section.items && (
          <ul>
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {section.data && (
          <div className="ds-detail">
            <strong>{section.data.title}</strong>
            <p>{section.data.text}</p>
            {section.data.items && (
              <ul>
                {section.data.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {section.data.summary && <p>{section.data.summary}</p>}
          </div>
        )}

        {section.legal && (
          <div className="ds-detail">
            <strong>{section.legal.title}</strong>
            <p>{section.legal.text}</p>

            {section.legalItems && (
              <ul>
                {section.legalItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {section.storage && (
          <div className="ds-detail">
            <strong>{section.storage.title}</strong>
            <p>{section.storage.text}</p>
          </div>
        )}

        {section.tlsTitle && (
          <div className="ds-detail">
            <strong>{section.tlsTitle}</strong>

            {section.tlsText && <p>{section.tlsText}</p>}
            {section.tlsText2 && <p>{section.tlsText2}</p>}
            {section.tlsText3 && <p>{section.tlsText3}</p>}
            {section.tlsText4 && <p>{section.tlsText4}</p>}
            {section.tlsText5 && <p>{section.tlsText5}</p>}
          </div>
        )}

        {section.affectedTitle && (
          <div className="ds-detail">
            <strong>{section.affectedTitle}</strong>
            <p>{section.affectedText}</p>
          </div>
        )}

        {section.phoneTitle && (
          <div className="ds-detail">
            <strong>{section.phoneTitle}</strong>
            <p>{section.phoneText}</p>
          </div>
        )}

        {section.emailTitle && (
          <div className="ds-detail">
            <strong>{section.emailTitle}</strong>
            <p>{section.emailText}</p>
          </div>
        )}

        {section.formTitle && (
          <div className="ds-detail">
            <strong>{section.formTitle}</strong>
            <p>{section.formText}</p>
          </div>
        )}

        {section.processorTitle && (
          <div className="ds-detail">
            <strong>{section.processorTitle}</strong>
            <p>{section.processorText}</p>
          </div>
        )}

        {section.contentTitle && (
          <div className="ds-detail">
            <strong>{section.contentTitle}</strong>

            {section.contentText && <p>{section.contentText}</p>}

            {section.contentItems && (
              <ul>
                {section.contentItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {section.duties && (
          <div className="ds-detail">
            <strong>{section.duties}</strong>

            {section.dutyItems && (
              <ul>
                {section.dutyItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {section.contact && <p>{section.contact}</p>}

        {section.provider && (
          <div className="ds-provider">
            <p>
              <strong>{section.provider.name}</strong>
              <br />

              <span className="ds-provider-address">
                {section.provider.address}
              </span>
            </p>
          </div>
        )}

        {section.link && section.linkUrl && (
          <a
            className="ds-section-link"
            href={section.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {section.link}
          </a>
        )}
      </div>
    </article>
  );
};

const Datenschutz = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <main className="ds-page" lang={language}>
      {/* HERO */}
      <section className="ds-hero">
        <div className="ds-container">
          <span className="ds-eyebrow">{t.hero.label}</span>

          <h1>
            {t.hero.title}
            <span>{t.hero.accent}</span>
          </h1>

          <p>{t.hero.description}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="ds-content">
        <div className="ds-container">
          <div className="ds-layout">
            {/* SIDEBAR */}
            <aside className="ds-sidebar">
              <div className="ds-sidebar-card">
                <span className="ds-sidebar-label">{t.responsible.label}</span>

                <strong>Dr. Shadi Loutfi</strong>

                <span>{t.responsible.practice}</span>

                <span>Billrothstraße 58/DG</span>

                <span>1190 Wien, Österreich</span>

                <a href="mailto:office@drloutfi.at">office@drloutfi.at</a>

                <a href="tel:+4367763471705">+43 677 63471705</a>
              </div>
            </aside>

            {/* MAIN */}
            <div className="ds-main">
              <Section number="01" section={t.sections.introduction} />
              <Section number="02" section={t.sections.legal} />
              <Section number="03" section={t.sections.responsible} />
              <Section number="04" section={t.sections.retention} />
              <Section number="05" section={t.sections.rights} />
              <Section number="06" section={t.sections.security} />
              <Section number="07" section={t.sections.communication} />
              <Section number="08" section={t.sections.processors} />
              <Section number="09" section={t.sections.cookies} />
              <Section number="10" section={t.sections.hosting} />
              <Section number="11" section={t.sections.webAnalytics} />
              <Section number="12" section={t.sections.googleAnalytics} />
              <Section number="13" section={t.sections.onlineMarketing} />
              <Section number="14" section={t.sections.eTermin} />
              <Section number="15" section={t.sections.googleAds} />
              <Section number="16" section={t.sections.authority} />

              {/* UPDATED */}
              <div className="ds-updated">
                <span>{t.updated.label}</span>
                <strong>{t.updated.value}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="ds-bottom">
        <div className="ds-container">
          <div className="ds-bottom-inner">
            <span>Dr. Shadi Loutfi</span>
            <span>1190 Wien · Österreich</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Datenschutz;
