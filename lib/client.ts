import { site } from "./content";

export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

let toastTimer: ReturnType<typeof setTimeout>;

export function toast(message: string) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

export async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email);
    toast("Copied");
  } catch {
    toast(site.email);
  }
}

export function jumpTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView();
  el.focus({ preventScroll: true });
}

export function openExternal(href: string) {
  window.open(href, "_blank", "noopener,noreferrer");
}

/** Subsequence match that rewards consecutive letters and word starts. Returns -1 for no match. */
export function fuzzyScore(query: string, text: string) {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  let qi = 0;
  let score = 0;
  let previous = -2;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] !== q[qi]) continue;
    score += i === previous + 1 ? 3 : 1;
    if (i === 0 || t[i - 1] === " ") score += 2;
    previous = i;
    qi++;
  }
  return qi === q.length ? score - t.length * 0.01 : -1;
}
