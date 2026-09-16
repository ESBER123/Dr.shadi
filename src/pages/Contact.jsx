import { useEffect } from "react";
import "../assets/styles/Contact.css";

import { useLanguage } from "../context/LanguageContext.jsx";
import contactTranslations from "../translat/contactTranslations";

const Contact = () => {
  const { language } = useLanguage();

  const t = contactTranslations?.[language] ?? contactTranslations?.en ?? {};

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const goToBooking = () => {
    window.location.href = "/booking";
  };

  // RETURN
  return (
    <main className="contact-page">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}
      <div className="contact-bg-circle"></div>
      <div className="contact-bg-circle circle-two"></div>
      <div className="contact-watermark">{t.watermark}</div>
      {/* HEADER    مشان اعرف */}
      <section className="contact-header">
        <div className="contact-label">
          <span></span>
          {t.headerLabel}
          <span></span>
        </div>

        <h1>
          {t.headerTitleBefore}
          <br />
          <em>{t.headerTitleHighlight}</em>
        </h1>

        <p>{t.headerText}</p>

        {/* CTA BUTTON مشان اعرف  */}

        <button className="hm-cta-button" type="button" onClick={goToBooking}>
          {t.bookAppointment}
          <span>→</span>
        </button>
      </section>
      {/* =========================================
          CONTACT CONTENT
      ========================================= */}
      <section className="contact-content">
        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="contact-info">
          <div className="info-intro">
            <span>{t.practiceLabel}</span>

            <h2>
              {t.practiceTitleBefore}
              <br />
              <em>{t.practiceTitleHighlight}</em>
            </h2>
          </div>

          {/* PHONE */}

          <a href="tel:+4367763471705" className="contact-info-item">
            <div className="contact-icon">☎</div>

            <div>
              <small>{t.phoneLabel}</small>

              <strong>+43 677 63471705</strong>
            </div>

            <span className="info-arrow">→</span>
          </a>

          {/* EMAIL */}

          <a href="mailto:office@drloutfi.at" className="contact-info-item">
            <div className="contact-icon">@</div>

            <div>
              <small>{t.emailLabel}</small>

              <strong>office@drloutfi.at</strong>
            </div>

            <span className="info-arrow">→</span>
          </a>

          {/* ADDRESS */}

          <a
            href="https://www.google.com/maps/place/Dr.+Shadi+Loutfi/@48.2408543,16.3491936,17z/data=!3m1!4b1!4m6!3m5!1s0xa963d9a69138f7a9:0x707c953d93613a7a!8m2!3d48.2408543!4d16.3491936!16s%2Fg%2F11z7s60h_f?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="contact-info-item"
          >
            <div className="contact-icon">+</div>

            <div>
              <small>{t.addressLabel}</small>

              <strong>
                Billrothstraße 58/DG
                <br />
                1190 Vienna, Austria
              </strong>
            </div>

            <span className="info-arrow">→</span>
          </a>

          {/* OPENING HOURS */}

          <div className="contact-info-item hours-item">
            <div className="contact-icon">◷</div>

            <div>
              <small>{t.openingHoursLabel}</small>

              <strong>
                {t.openingDays}
                <br />
                {t.openingTime}
              </strong>
            </div>
          </div>

          {/* BOOKING */}

          <a
            href="/booking"
            target="_blank"
            rel="noreferrer"
            className="booking-link"
          >
            <div>
              <span>{t.bookingLabel}</span>

              <strong>{t.bookingButton}</strong>
            </div>

            <span className="booking-arrow">↗</span>
          </a>
        </div>

        {/* =========================================
            FORM
        ========================================= */}

        <div className="contact-form-wrapper">
          <div className="form-top">
            <span>{t.formProgress}</span>

            <span>{t.formTitle}</span>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            {/* NAME */}

            <div className="form-group">
              <label>
                01
                <span>{t.nameLabel}</span>
              </label>

              <input type="text" placeholder={t.namePlaceholder} />
            </div>

            {/* PHONE */}

            <div className="form-group">
              <label>
                02
                <span>{t.phoneLabel}</span>
              </label>

              <input type="tel" placeholder={t.phonePlaceholder} />
            </div>

            {/* EMAIL */}

            <div className="form-group">
              <label>
                03
                <span>{t.emailLabelForm}</span>
              </label>

              <input type="email" placeholder={t.emailPlaceholder} />
            </div>

            {/* MESSAGE */}

            <div className="form-group message-group">
              <label>
                04
                <span>{t.messageLabel}</span>
              </label>

              <textarea placeholder={t.messagePlaceholder} rows="5"></textarea>
            </div>

            {/* SUBMIT */}

            <button type="submit" className="send-button">
              <span>{t.sendMessage}</span>

              <strong>→</strong>
            </button>
          </form>

          <p className="form-note">{t.formNote}</p>
        </div>
      </section>
      {/* =========================================
          BOTTOM MARQUEE
      ========================================= */}
      <div className="contact-marquee">
        <div className="marquee-track">
          <span>{t.marqueeSmile}</span>
          <i>✦</i>

          <span>{t.marqueePassion}</span>
          <i>✦</i>

          <span>{t.marqueeSmile}</span>
          <i>✦</i>

          <span>{t.marqueePassion}</span>
          <i>✦</i>

          <span>{t.marqueeSmile}</span>
          <i>✦</i>

          <span>{t.marqueePassion}</span>
          <i>✦</i>
        </div>
      </div>
    </main>
  );
};

export default Contact;
