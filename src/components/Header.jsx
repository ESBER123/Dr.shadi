import { NavLink } from "react-router-dom";
import LogoImage from "../images/Logoo.png";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../translat/translations";
import "../assets/styles/App.css";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const t = translations?.[language] ?? translations?.en ?? {};

  return (
    <header className="navbar-floating-wrapper">
      <div className="navbar-card">
        {/* LOGO */}
        <div className="logo-center">
          <NavLink to="/">
            <img src={LogoImage} alt="Kieferorthopädie Dr. Shadi Loutfi" />
          </NavLink>
        </div>

        {/* NAVIGATION */}
        <div className="header-center">
          <nav className="nav-links">
            <NavLink to="/">
              {language === "en" ? "Home" : "Startseite"}
            </NavLink>

            <NavLink to="/treatment">
              {language === "en" ? "Treatments" : "Behandlungen"}
            </NavLink>

            <NavLink to="/about">
              {language === "en" ? "About" : "Über uns"}
            </NavLink>

            <NavLink to="/faq">FAQ</NavLink>

            <NavLink to="/contact">
              {language === "en" ? "Contact" : "Kontakt"}
            </NavLink>
          </nav>

          {/* ACTIONS */}
          <div className="header-actions">
            <button
              type="button"
              className="language-switch"
              onClick={toggleLanguage}
              aria-label="Switch language"
            >
              <span className={language === "en" ? "active" : ""}>EN</span>

              <span className="language-divider">/</span>

              <span className={language === "de" ? "active" : ""}>DE</span>
            </button>

            <NavLink to="/booking" className="header-cta">
              {t.bookAppointment ||
                (language === "de" ? "Termin buchen" : "Book a Consultation")}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
