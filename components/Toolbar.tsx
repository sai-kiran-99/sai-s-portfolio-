"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { toggleTheme } from "@/lib/client";

// Loaded on first use, so the palette and CLI cost nothing on page load.
const Palette = dynamic(() => import("./Palette"), { ssr: false });
const Terminal = dynamic(() => import("./Terminal"), { ssr: false });

const preload = () => {
  void import("./Palette");
  void import("./Terminal");
};

export function Toolbar() {
  const [palette, setPalette] = useState(false);
  const [terminal, setTerminal] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!document.querySelector("dialog.cli[open]")) setPalette(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="js-only flex flex-wrap gap-2" onPointerEnter={preload} onFocus={preload}>
      <button
        type="button"
        className="btn font-mono"
        data-magnetic
        aria-label="⌘K Open command palette"
        onClick={() => setPalette(true)}
      >
        ⌘K
      </button>
      <button type="button" className="btn font-mono" data-magnetic onClick={() => setTerminal(true)}>
        Terminal
      </button>
      <button type="button" className="btn font-mono" data-magnetic onClick={toggleTheme}>
        Theme
      </button>
      {palette && (
        <Palette
          onClose={() => setPalette(false)}
          onTerminal={() => setTerminal(true)}
        />
      )}
      {terminal && <Terminal onClose={() => setTerminal(false)} />}
    </div>
  );
}
