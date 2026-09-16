import { createContext, useContext, useState } from "react";
const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("clinic-language");

    if (savedLanguage === "de" || savedLanguage === "en") {
      return savedLanguage;
    }

    localStorage.setItem("clinic-language", "de");
    return "de";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "de" : "en";
      localStorage.setItem("clinic-language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
