import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../images/Logoo.png";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../translat/translations";
import "../assets/styles/App.css";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations?.[language] ?? translations?.en ?? {};
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-floating-wrapper">
      <div className="navbar-card">
        {/* الشعار في المنتصف */}
        <div className="logo-center">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src={LogoImage} alt="Kieferorthopädie Dr. Shadi Loutfi" />
          </NavLink>
        </div>

        {/* زر القائمة للموبايل */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>

        {/* محتوى الهيدر (الروابط والأزرار) */}
        <div className={`header-center ${mobileMenuOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <NavLink to="/" onClick={closeMobileMenu}>
              {language === "en" ? "Home" : "Startseite"}
            </NavLink>
            <NavLink to="/treatment" onClick={closeMobileMenu}>
              {language === "en" ? "Treatments" : "Behandlungen"}
            </NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>
              {language === "en" ? "About" : "Über uns"}
            </NavLink>
            <NavLink to="/faq" onClick={closeMobileMenu}>
              FAQ
            </NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              {language === "en" ? "Contact" : "Kontakt"}
            </NavLink>
          </nav>

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

            <NavLink
              to="/booking"
              className="header-cta"
              onClick={closeMobileMenu}
            >
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
