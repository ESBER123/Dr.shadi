import { useLanguage } from "../context/LanguageContext";
import translations from "../translat/datenschutzTranslations.js";

import "../assets/styles/Datenschutz.css";

const Datenschutz = () => {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <main className="ds-page" lang={language}>

      {/* HERO */}
      <section className="ds-hero">
        <div className="ds-container">

          <span className="ds-eyebrow">
            {t.hero.label}
          </span>

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

                <span className="ds-sidebar-label">
                  {t.responsible.label}
                </span>

                <strong>Dr. Shadi Loutfi</strong>

                <span>
                  {t.responsible.practice}
                </span>

                <span>
                  Billrothstraße 58
                </span>

                <span>
                  1190 Wien, Österreich
                </span>

                <a href="mailto:office@drloutfi.at">
                  office@drloutfi.at
                </a>

              </div>
            </aside>


            {/* MAIN */}
            <div className="ds-main">

              {/* 01 */}
              <section className="ds-section">
                <div className="ds-number">01</div>

                <div>
                  <h2>{t.sections.introduction.title}</h2>

                  <p>
                    {t.sections.introduction.text1}
                  </p>

                  <p>
                    {t.sections.introduction.text2}
                  </p>
                </div>
              </section>


              {/* 02 */}
              <section className="ds-section">
                <div className="ds-number">02</div>

                <div>
                  <h2>{t.sections.responsible.title}</h2>

                  <p>
                    {t.sections.responsible.intro}
                  </p>

                  <div className="ds-contact-card">

                    <strong>
                      Dr. Shadi Loutfi
                    </strong>

                    <span>
                      Kieferorthopädische Praxis
                    </span>

                    <span>
                      Billrothstraße 58
                    </span>

                    <span>
                      1190 Wien, Österreich
                    </span>

                    <a href="mailto:office@drloutfi.at">
                      office@drloutfi.at
                    </a>

                    <a href="tel:+4367763471705">
                      +43 677 63471705
                    </a>

                  </div>
                </div>
              </section>


              {/* 03 */}
              <section className="ds-section">
                <div className="ds-number">03</div>

                <div>
                  <h2>{t.sections.legal.title}</h2>

                  <p>
                    {t.sections.legal.intro}
                  </p>

                  <ul>
                    {t.sections.legal.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p>
                    {t.sections.legal.austria}
                  </p>
                </div>
              </section>


              {/* 04 */}
              <section className="ds-section">
                <div className="ds-number">04</div>

                <div>
                  <h2>{t.sections.retention.title}</h2>

                  <p>
                    {t.sections.retention.text1}
                  </p>

                  <p>
                    {t.sections.retention.text2}
                  </p>
                </div>
              </section>


              {/* 05 */}
              <section className="ds-section">
                <div className="ds-number">05</div>

                <div>
                  <h2>{t.sections.rights.title}</h2>

                  <p>
                    {t.sections.rights.intro}
                  </p>

                  <ul>
                    {t.sections.rights.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p>
                    {t.sections.rights.contact}
                  </p>

                  <a
                    href="mailto:office@drloutfi.at"
                    className="ds-email-link"
                  >
                    office@drloutfi.at
                  </a>
                </div>
              </section>


              {/* 06 */}
              <section className="ds-section">
                <div className="ds-number">06</div>

                <div>
                  <h2>{t.sections.security.title}</h2>

                  <p>
                    {t.sections.security.text}
                  </p>
                </div>
              </section>


              {/* 07 */}
              <section className="ds-section">
                <div className="ds-number">07</div>

                <div>
                  <h2>{t.sections.communication.title}</h2>

                  <p>
                    {t.sections.communication.text}
                  </p>

                  <h3>
                    {t.sections.communication.emailTitle}
                  </h3>

                  <p>
                    {t.sections.communication.emailText}
                  </p>

                  <h3>
                    {t.sections.communication.phoneTitle}
                  </h3>

                  <p>
                    {t.sections.communication.phoneText}
                  </p>
                </div>
              </section>


              {/* 08 */}
              <section className="ds-section">
                <div className="ds-number">08</div>

                <div>
                  <h2>{t.sections.hosting.title}</h2>

                  <p>
                    {t.sections.hosting.text}
                  </p>

                  <p>
                    <strong>
                      World4You Internet Services GmbH
                    </strong>
                    <br />
                    Hafenstraße 35
                    <br />
                    4020 Linz, Österreich
                  </p>

                  <p>
                    {t.sections.hosting.storage}
                  </p>

                  <a
                    href="https://www.world4you.com/de/unternehmen/datenschutzerklaerung.html"
                    target="_blank"
                    rel="noreferrer"
                    className="ds-external-link"
                  >
                    {t.sections.hosting.link}
                    <span>↗</span>
                  </a>
                </div>
              </section>


              {/* 09 */}
              <section className="ds-section">
                <div className="ds-number">09</div>

                <div>
                  <h2>{t.sections.cookies.title}</h2>

                  <p>
                    {t.sections.cookies.text1}
                  </p>

                  <p>
                    {t.sections.cookies.text2}
                  </p>
                </div>
              </section>


              {/* 10 */}
              <section className="ds-section">
                <div className="ds-number">10</div>

                <div>
                  <h2>{t.sections.docfinder.title}</h2>

                  <p>
                    {t.sections.docfinder.text}
                  </p>

                  <p>
                    {t.sections.docfinder.data}
                  </p>

                  <p>
                    {t.sections.docfinder.legal}
                  </p>

                  <a
                    href="https://www.docfinder.at/"
                    target="_blank"
                    rel="noreferrer"
                    className="ds-external-link"
                  >
                    {t.sections.docfinder.link}
                    <span>↗</span>
                  </a>
                </div>
              </section>


              {/* 11 */}
              <section className="ds-section">
                <div className="ds-number">11</div>

                <div>
                  <h2>{t.sections.googleMaps.title}</h2>

                  <p>
                    {t.sections.googleMaps.text}
                  </p>

                  <p>
                    {t.sections.googleMaps.data}
                  </p>
                </div>
              </section>


              {/* 12 */}
              <section className="ds-section">
                <div className="ds-number">12</div>

                <div>
                  <h2>{t.sections.whatsapp.title}</h2>

                  <p>
                    {t.sections.whatsapp.text}
                  </p>

                  <p>
                    {t.sections.whatsapp.data}
                  </p>
                </div>
              </section>


              {/* 13 */}
              <section className="ds-section">
                <div className="ds-number">13</div>

                <div>
                  <h2>{t.sections.authority.title}</h2>

                  <p>
                    {t.sections.authority.text}
                  </p>

                  <p>
                    <strong>
                      Österreichische Datenschutzbehörde
                    </strong>
                    <br />
                    Barichgasse 40-42
                    <br />
                    1030 Wien
                    <br />
                    +43 1 52 152-0
                    <br />
                    dsb@dsb.gv.at
                  </p>

                  <a
                    href="https://www.dsb.gv.at/"
                    target="_blank"
                    rel="noreferrer"
                    className="ds-external-link"
                  >
                    {t.sections.authority.link}
                    <span>↗</span>
                  </a>
                </div>
              </section>


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