"use client";

import { useEffect, useRef, useState } from "react";
import { demoCode, demoIssues } from "@/lib/content";

const LINES = demoCode.length;
const FINAL = LINES + demoIssues.length;

function delayFor(step: number) {
  if (step === 0) return 700;
  if (step < LINES) return 160;
  if (step === LINES) return 800;
  if (step < FINAL) return 1100;
  return 4500;
}

/** Server-renders the finished review; the replay only starts once JS and motion allow it. */
export function ReviewDemo() {
  const root = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(FINAL);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !root.current) return;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        setStep(0);
      }
      setInView(entry.isIntersecting);
    });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    const timer = setTimeout(() => setStep((s) => (s >= FINAL ? 0 : s + 1)), delayFor(step));
    return () => clearTimeout(timer);
  }, [step, inView, paused]);

  const issuesShown = Math.max(0, step - LINES);
  const flagged = new Set(demoIssues.slice(0, issuesShown).map((i) => i.line));
  const status =
    step >= FINAL ? `done · ${demoIssues.length} issues` : step >= LINES ? "streaming…" : "reading code…";

  return (
    <div ref={root} className="mt-5 grid gap-3 md:grid-cols-[1.25fr_1fr]">
      <div className="flex flex-col overflow-hidden rounded-xl border border-line bg-bg">
        <div className="flex h-9 items-center justify-between border-b border-line px-3 font-mono text-xs text-muted">
          <span>getUser.js</span>
          <span aria-hidden="true">{status}</span>
        </div>
        <pre tabIndex={0} role="region" aria-label="Example buggy code" className="flex-1 overflow-x-auto py-3 font-mono text-xs leading-6">
          <code>
            {demoCode.map((tokens, i) => (
              <span
                key={i}
                className={`code-line fade ${flagged.has(i + 1) ? "flag" : ""}`}
                style={{ opacity: i < step ? 1 : 0 }}
              >
                <span aria-hidden="true" className="inline-block w-6 select-none pr-2 text-right text-muted">
                  {i + 1}
                </span>
                {tokens.map(([kind, text], t) => (
                  <span key={t} className={`t-${kind}`}>
                    {text}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
        <div className="motion-only js-only border-t border-line px-3 py-1.5 text-right">
          <button type="button" className="link font-mono text-xs" onClick={() => setPaused((p) => !p)}>
            {paused ? "play" : "pause"}
          </button>
        </div>
      </div>

      <ul className="space-y-2">
        {demoIssues.map((issue, i) => (
          <li
            key={issue.line}
            className="fade rounded-xl border border-line bg-surface-2 p-3"
            style={{ opacity: i < issuesShown ? 1 : 0 }}
          >
            <div className="flex items-center gap-2 text-xs">
              <span className={`sev sev-${issue.severity}`}>{issue.severity}</span>
              <span className="rounded bg-surface px-1.5 py-0.5 text-muted">{issue.category}</span>
              <span className="ml-auto font-mono text-muted">Line {issue.line}</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-snug">{issue.message}</p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-muted">Suggested fix</p>
            <code className="mt-1 block break-words rounded-md bg-bg p-2 font-mono text-[11px] leading-snug">
              {issue.suggestion}
            </code>
          </li>
        ))}
      </ul>
    </div>
  );
}
