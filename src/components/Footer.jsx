import { Container, Row, Col } from "react-bootstrap";
import {
  FaTooth,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";
import translations from "../translat/footerTranslat.js";

import "../assets/styles/Footer.css";

const Footer = () => {
  const { language } = useLanguage();

  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="clinic-footer">
      <Container>
        {/* Main Footer */}
        <Row className="footer-main">
          {/* Brand */}
          <Col lg={5} md={6} className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaTooth />
              </div>

              <div>
                <h3>Dr. Shadi Loutfi</h3>
                <span>{t.footer.specialty}</span>
              </div>
            </div>

            <p className="footer-description">{t.footer.description}</p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </Col>

          {/* Contact */}
          <Col lg={4} md={6} className="footer-contact">
            <h4>{t.footer.contact}</h4>

            {/* Phone */}
            <a href="tel:+4367763471705" className="footer-contact-item">
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>

              <span>
                <small>{t.footer.phone}</small>
                +43 677 63471705
              </span>
            </a>
            <a href="mailto:office@drloutfi.at" className="footer-contact-item">
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <span>
                <small>{t.footer.email}</small>
                office@drloutfi.at
              </span>
            </a>
            <div className="footer-contact-item">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <span>
                <small>{t.footer.addressTitle}</small>
                <a
                  href="https://www.google.com/maps/place/Dr.+Shadi+Loutfi/@48.2408543,16.3491936,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <div>
                    <strong>
                      {t.footer.street}
                      <br />
                      {t.footer.city}
                    </strong>
                  </div>

                  <span className="info-arrow">→</span>
                </a>
              </span>
            </div>
          </Col>
          <Col lg={3} md={12} className="footer-links">
            <h4>{t.footer.quickLinks}</h4>

            <a href="/about">{t.footer.about}</a>

            <a href="/treatment">{t.footer.treatments}</a>

            <a href="/faq">{t.footer.whyUs}</a>

            <a href="/booking">{t.footer.appointment}</a>
          </Col>
        </Row>

        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>
            © 2026 <strong>Dr. Shadi Loutfi</strong>. {t.footer.rights}
          </p>

          <div className="footer-bottom-links">
            <a href="/datenschutz">{t.footer.privacy}</a>

            <a href="/impressum">{t.footer.imprint}</a>
          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label={t.footer.backToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
