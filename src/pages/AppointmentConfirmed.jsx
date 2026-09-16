import { useLanguage } from "../context/LanguageContext";
import "../assets/styles/AppointmentConfirmed.css";

const AppointmentConfirmed = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "APPOINTMENT CONFIRMED",
      title: "Thank you for booking with us.",
      message: "Your appointment has been successfully confirmed.",
      description:
        "We look forward to welcoming you to our practice and helping you on your journey to a healthy, confident smile.",
      footer: "We look forward to seeing you.",
    },

    de: {
      label: "TERMIN BESTÄTIGT",
      title: "Vielen Dank für Ihre Terminvereinbarung.",
      message: "Ihr Termin wurde erfolgreich bestätigt.",
      description:
        "Wir freuen uns darauf, Sie in unserer Praxis willkommen zu heißen und Sie auf Ihrem Weg zu einem gesunden und selbstbewussten Lächeln zu begleiten.",
      footer: "Wir freuen uns auf Ihren Besuch.",
    },
  };

  const t = content[language] || content.en;

  return (
    <main className="appointment-confirmed-page">
      <div className="confirmed-background-circle confirmed-circle-one"></div>
      <div className="confirmed-background-circle confirmed-circle-two"></div>

      <section className="appointment-confirmed-card">
        <div className="confirmed-icon">✓</div>

        <span className="confirmed-label">{t.label}</span>

        <h1>{t.title}</h1>

        <p className="confirmed-main-text">{t.message}</p>

        <p className="confirmed-description">{t.description}</p>

        <div className="confirmed-divider"></div>

        <p className="confirmed-footer">{t.footer}</p>
      </section>
    </main>
  );
};

export default AppointmentConfirmed;
