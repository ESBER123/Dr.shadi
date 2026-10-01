import { useEffect, useState } from "react";
import "../assets/styles/Contact.css";

import { useLanguage } from "../context/LanguageContext.jsx";
import contactTranslations from "../translat/contactTranslations";
import SEO from "../components/SEO";

const Contact = () => {
  const { language } = useLanguage();

  const t = contactTranslations?.[language] ?? contactTranslations?.en ?? {};

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const seo =
    language === "de"
      ? {
          title: "Kontakt | Kieferorthopädie Dr. Shadi Loutfi Wien",
          description:
            "Kontaktieren Sie die kieferorthopädische Praxis Dr. Shadi Loutfi in 1190 Wien. Vereinbaren Sie einen Termin oder kontaktieren Sie uns telefonisch oder per E-Mail.",
        }
      : {
          title: "Contact | Orthodontist Dr. Shadi Loutfi Vienna",
          description:
            "Contact Dr. Shadi Loutfi's orthodontic practice in 1190 Vienna. Book an appointment or contact us by phone or email.",
        };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const goToBooking = () => {
    window.location.href = "/booking";
  };

  // =========================================
  // SEND CONTACT FORM
  // =========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // Basic validation
    if (!name || !email || !message) {
      setStatus(
        language === "de"
          ? "Bitte füllen Sie Name, E-Mail und Nachricht aus."
          : "Please fill in your name, email and message.",
      );

      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/office@drloutfi.at",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            message,

            // FormSubmit options
            _subject: `Neue Nachricht von ${name}`,
            _template: "table",
            _captcha: "true",
            _url: window.location.href,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Form submission failed");
      }

      setStatus(
        language === "de"
          ? "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."
          : "Thank you! Your message has been sent successfully.",
      );

      // Clear form
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        language === "de"
          ? "Leider konnte die Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch."
          : "Unfortunately, your message could not be sent. Please try again or contact us by phone.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical="https://www.drloutfi.at/contact"
      />

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}
      <div className="contact-bg-circle"></div>
      <div className="contact-bg-circle circle-two"></div>

      <div className="contact-watermark">{t.watermark}</div>

      {/* =========================================
          HEADER
      ========================================= */}
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
            href="https://www.google.com/maps/place/Dr.+Shadi+Loutfi/@48.2408543,16.3491936,17z/data=!3m1!4b1!4m6!3m5!1s0xa963d9a69138f7a9:0x707c953d93613a7a!8m2!3d48.2408543!4d16.3491936!16s%2Fg%2F11z7s60h_f"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-item"
          >
            <div className="contact-icon">+</div>

            <div>
              <small>{t.addressLabel}</small>

              <strong>
                Billrothstraße 58/DG
                <br />
                {language === "de"
                  ? "1190 Wien, Österreich"
                  : "1190 Vienna, Austria"}
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
          <a href="/booking" className="booking-link">
            <div>
              <span>{t.bookingLabel}</span>
              <strong>{t.bookingButton}</strong>
            </div>

            <span className="booking-arrow">↗</span>
          </a>
        </div>

        {/* =========================================
            CONTACT FORM
        ========================================= */}
        <div className="contact-form-wrapper">
          <div className="form-top">
            <span>{t.formProgress}</span>
            <span>{t.formTitle}</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="form-group">
              <label htmlFor="contact-name">
                01
                <span>{t.nameLabel}</span>
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                autoComplete="name"
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label htmlFor="contact-phone">
                02
                <span>{t.phoneLabel}</span>
              </label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder={t.phonePlaceholder}
                autoComplete="tel"
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="contact-email">
                03
                <span>{t.emailLabelForm}</span>
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                autoComplete="email"
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group message-group">
              <label htmlFor="contact-message">
                04
                <span>{t.messageLabel}</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder={t.messagePlaceholder}
                rows="5"
                required
              />
            </div>

            {/* STATUS MESSAGE */}
            {status && (
              <div
                className={`form-status ${
                  status.includes("erfolgreich") ||
                  status.includes("successfully")
                    ? "success"
                    : "error"
                }`}
                role="alert"
              >
                {status}
              </div>
            )}

            {/* SEND BUTTON */}
            <button type="submit" className="send-button" disabled={isSending}>
              <span>
                {isSending
                  ? language === "de"
                    ? "Wird gesendet..."
                    : "Sending..."
                  : t.sendMessage}
              </span>

              <strong>{isSending ? "…" : "→"}</strong>
            </button>
          </form>

          <p className="form-note">{t.formNote}</p>
        </div>
      </section>

      {/* =========================================
          MARQUEE
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
