import { useEffect } from "react";

const SEO = ({ title, description, canonical, ogTitle }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMeta = (selector, attribute, key, content) => {
      if (!content) return;

      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
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

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');

      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }

      canonicalLink.setAttribute("href", canonical);
    }
  }, [title, description, canonical, ogTitle]);

  return null;
};

export default SEO;
