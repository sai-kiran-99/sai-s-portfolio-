"use client";

import { useEffect } from "react";

function finish() {
  document.documentElement.classList.add("typed");
  try {
    sessionStorage.setItem("typed", "1");
  } catch {}
}

export function HeroSkip() {
  useEffect(() => {
    const timer = setTimeout(finish, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button type="button" onClick={finish} className="skip js-only link ml-auto font-mono text-xs">
      skip
    </button>
  );
}
