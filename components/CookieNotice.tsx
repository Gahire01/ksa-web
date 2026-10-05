"use client";

import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(localStorage.getItem("ksa-cookie-dismissed") !== "yes"), []);
  if (!visible) return null;

  return (
    <aside className="cookie-notice" role="dialog" aria-label="Cookie notice">
      <p>This website uses cookies to support essential site functions and improve your browsing experience. <a href="#contact">Read our privacy information.</a></p>
      <button type="button" onClick={() => { localStorage.setItem("ksa-cookie-dismissed", "yes"); setVisible(false); }}>Got It!!</button>
    </aside>
  );
}
