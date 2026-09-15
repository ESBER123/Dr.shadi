// Booking.jsx
import { useLanguage } from "../context/LanguageContext";
import { bookingTranslations } from "../translat/bookingTranslations";
import "../assets/styles/Booking.css";

const Booking = () => {
  const { language } = useLanguage();
  const t = bookingTranslations[language] || bookingTranslations.en;

  return (
    <main className="booking-page">
      <div className="booking-background-circle booking-circle-one"></div>
      <div className="booking-background-circle booking-circle-two"></div>

      <section className="booking-header">
        <div className="booking-label">
          <span></span>
          {t.label}
        </div>

        <h1>
          {t.titleStart}
          <em>{t.titleEm}</em>
        </h1>

        <p>{t.description}</p>
      </section>

      <section className="booking-card">
        <div className="booking-card-top">
          <div>
            <span className="booking-card-label">{t.cardLabel}</span>
            <h2>{t.cardTitle}</h2>
          </div>

          <div className="booking-status">
            <span></span>
            {t.status}
          </div>
        </div>

        <div className="booking-frame">
          <iframe
            src="https://www.eTermin.net/kfo?calendarid=222844"
            title={t.iframeTitle}
          />
        </div>
      </section>
    </main>
  );
};

export default Booking;
