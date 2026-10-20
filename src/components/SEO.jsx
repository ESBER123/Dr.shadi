import { useEffect } from "react";

const SEO = ({ title, description, canonical, ogTitle }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMeta = (selector, attribute, key, content) => {
      if (!content) return;

      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setCanonical = (href) => {
      if (!href) return;

      let element = document.head.querySelector('link[rel="canonical"]');

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', "name", "description", description);

    setMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      ogTitle || title,
    );

    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );

    setMeta('meta[property="og:type"]', "property", "og:type", "website");

    if (canonical) {
      setCanonical(canonical);
    }
  }, [title, description, canonical, ogTitle]);

  return null;
};

export default SEO;
