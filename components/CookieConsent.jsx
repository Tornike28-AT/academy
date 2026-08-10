"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-56MJ3P9MSF";

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (stored) {
      setConsent(stored);
    } else {
      setShowBanner(true);
    }
  }, []);

  function handleConsent(value) {
    localStorage.setItem("cookie_consent", value);
    setConsent(value);
    setShowBanner(false);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-neutral-900 text-white p-4 rounded-xl shadow-lg z-[9999] flex flex-col gap-3">
          <p className="text-sm">
            ვიყენებთ cookie-ებს საიტის გასაუმჯობესებლად და ანალიტიკისთვის.
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => handleConsent("rejected")}
              className="px-3 py-1.5 text-sm rounded-lg border border-white/30 hover:bg-white/10"
            >
              უარყოფა
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="px-3 py-1.5 text-sm rounded-lg bg-white text-neutral-900 hover:bg-white/90"
            >
              დათანხმება
            </button>
          </div>
        </div>
      )}
    </>
  );
}