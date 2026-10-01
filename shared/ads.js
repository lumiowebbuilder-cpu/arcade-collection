// Centralized AdSense loader — inert until ADSENSE_CLIENT_ID is set below.
// Once you have an approved AdSense publisher ID (format: "ca-pub-XXXXXXXXXXXXXXXX"),
// set it here and every page that includes this script will pick it up automatically.
// Until then, this file does nothing (no script injected, no layout reserved for ads).
(function () {
  const ADSENSE_CLIENT_ID = ""; // e.g. "ca-pub-1234567890123456"

  if (!ADSENSE_CLIENT_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT_ID;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);

  document.querySelectorAll("ins.adsbygoogle[data-ad-slot]").forEach((ins) => {
    ins.setAttribute("data-ad-client", ADSENSE_CLIENT_ID);
  });

  window.addEventListener("load", () => {
    document.querySelectorAll("ins.adsbygoogle[data-ad-slot]").forEach(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        /* AdSense not yet approved for this domain — fails silently */
      }
    });
  });
})();
