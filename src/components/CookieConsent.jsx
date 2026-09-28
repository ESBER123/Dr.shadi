import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie_consent";

const updateGoogleConsent = (analytics, marketing) => {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (!saved) {
      setVisible(true);
      return;
    }

    try {
      const consent = JSON.parse(saved);

      const analyticsConsent = Boolean(consent.analytics);
      const marketingConsent = Boolean(consent.marketing);

      setAnalytics(analyticsConsent);
      setMarketing(marketingConsent);

      updateGoogleConsent(analyticsConsent, marketingConsent);
    } catch {
      localStorage.removeItem(CONSENT_KEY);
      setVisible(true);
    }
  }, []);

  const saveConsent = (analyticsValue, marketingValue) => {
    const consent = {
      analytics: analyticsValue,
      marketing: marketingValue,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

    updateGoogleConsent(analyticsValue, marketingValue);

    setAnalytics(analyticsValue);
    setMarketing(marketingValue);
    setVisible(false);
    setSettingsOpen(false);
  };

  const acceptAll = () => {
    saveConsent(true, true);
  };

  const rejectAll = () => {
    saveConsent(false, false);
  };

  const savePreferences = () => {
    saveConsent(analytics, marketing);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        background: "#fff",
        borderTop: "1px solid #ddd",
        boxShadow: "0 -5px 25px rgba(0,0,0,0.12)",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {!settingsOpen ? (
          <>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              Cookie-Einstellungen
            </h3>

            <p
              style={{
                lineHeight: 1.6,
                marginBottom: "18px",
              }}
            >
              Wir verwenden Cookies und ähnliche Technologien, um unsere Website
              zu verbessern, die Nutzung zu analysieren und unsere Dienste zu
              messen. Sie können Ihre Einstellungen jederzeit ändern.
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={acceptAll}
                style={{
                  padding: "11px 20px",
                  border: "none",
                  borderRadius: "6px",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Alle akzeptieren
              </button>

              <button
                type="button"
                onClick={rejectAll}
                style={{
                  padding: "11px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Ablehnen
              </button>

              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                style={{
                  padding: "11px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Einstellungen
              </button>
            </div>
          </>
        ) : (
          <>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "18px",
              }}
            >
              Cookie-Einstellungen
            </h3>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                Analyse / Google Analytics
              </label>

              <small>
                Hilft uns zu verstehen, wie Besucher unsere Website nutzen.
              </small>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                Marketing / Google Ads
              </label>

              <small>
                Wird für Marketing- und Conversion-Messung verwendet.
              </small>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={savePreferences}
                style={{
                  padding: "11px 20px",
                  border: "none",
                  borderRadius: "6px",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Auswahl speichern
              </button>

              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                style={{
                  padding: "11px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Zurück
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
