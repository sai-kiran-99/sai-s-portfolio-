"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { openExternal } from "@/lib/client";
import { experience, project, site } from "@/lib/content";

const COMMANDS = ["help", "about", "experience", "projects", "contact", "resume", "clear", "exit"];

type Entry = { id: number; input?: string; output?: ReactNode };

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const OUTPUT: Record<string, () => ReactNode> = {
  help: () => (
    <table>
      <tbody>
        {[
          ["about", "who I am"],
          ["experience", "roles and impact"],
          ["projects", "what I have built"],
          ["contact", "how to reach me"],
          ["resume", "open my resume"],
          ["clear", "clear the screen"],
          ["exit", "back to the normal page"],
        ].map(([name, text]) => (
          <tr key={name}>
            <td className="pr-6 text-accent">{name}</td>
            <td className="text-muted">{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
  about: () => (
    <>
      <p className="font-semibold">
        {site.name} · {site.title} @ {site.company}
      </p>
      <p className="mt-1 max-w-3xl text-muted">{site.about}</p>
    </>
  ),
  experience: () =>
    experience.map((job) => (
      <div key={job.hash} className="mb-3">
        <p>
          <span className="text-accent">{job.hash}</span> {job.role} · {job.company}{" "}
          <span className="text-muted">({job.date})</span>
        </p>
        {job.bullets.map((b) => (
          <p key={b} className="max-w-3xl pl-4 text-muted">
            - {b}
          </p>
        ))}
      </div>
    )),
  projects: () => (
    <>
      <p className="font-semibold">{project.name}</p>
      <p className="max-w-3xl text-muted">{project.description}</p>
      <p>
        <A href={project.live}>live</A> · <A href={project.repo}>source</A>
      </p>
    </>
  ),
  contact: () => (
    <>
      <p>
        email <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        github <A href={site.github}>{site.github}</A>
      </p>
      <p>
        linkedin <A href={site.linkedin}>{site.linkedin}</A>
      </p>
      <p>
        leetcode <A href={site.leetcode}>{site.leetcode}</A>
      </p>
    </>
  ),
};

export default function Terminal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const end = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const [entries, setEntries] = useState<Entry[]>([
    { id: 0, output: <p className="text-muted">Welcome. Type help to list commands, or exit to go back.</p> },
  ]);

  useEffect(() => {
    const el = dialog.current;
    if (el && !el.open) el.showModal();
    input.current?.focus();
  }, []);

  useEffect(() => {
    end.current?.scrollIntoView({ block: "end" });
  }, [entries]);

  const print = (entry: Omit<Entry, "id">) => setEntries((list) => [...list, { ...entry, id: nextId.current++ }]);

  const execute = (raw: string) => {
    const name = raw.trim().toLowerCase();
    setValue("");
    setCursor(-1);
    if (!name) return print({ input: raw });
    setHistory((h) => [name, ...h]);
    if (name === "clear") return setEntries([]);
    if (name === "exit") return dialog.current?.close();
    if (name === "resume") {
      openExternal(site.resume);
      return print({
        input: raw,
        output: <A href={site.resume}>Opened resume in a new tab</A>,
      });
    }
    const render = OUTPUT[name];
    print({
      input: raw,
      output: render ? render() : <p className="text-muted">command not found: {name}. Try help.</p>,
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      execute(value);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const prefix = value.trim().toLowerCase();
      if (!prefix) return;
      const matches = COMMANDS.filter((c) => c.startsWith(prefix));
      if (matches.length === 1) setValue(matches[0]);
      else if (matches.length > 1) print({ input: value, output: <p className="text-muted">{matches.join("  ")}</p> });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cursor + 1, history.length - 1);
      if (next >= 0) {
        setCursor(next);
        setValue(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = cursor - 1;
      setCursor(Math.max(next, -1));
      setValue(next >= 0 ? history[next] : "");
    }
  };

  return (
    <dialog ref={dialog} className="cli" aria-label="Terminal mode" onClose={onClose}>
      <div
        className="h-full overflow-y-auto p-4 font-mono text-sm leading-6 sm:p-8"
        onClick={() => {
          if (!window.getSelection()?.toString()) input.current?.focus();
        }}
      >
        <button type="button" className="link float-right text-xs" onClick={() => dialog.current?.close()}>
          exit terminal
        </button>
        <div role="log" aria-live="polite">
          {entries.map((entry) => (
            <div key={entry.id} className="mb-2">
              {entry.input !== undefined && (
                <p>
                  <span className="text-accent">sai@portfolio $ </span>
                  {entry.input}
                </p>
              )}
              {entry.output}
            </div>
          ))}
        </div>
        <div ref={end} className="flex items-center">
          <label htmlFor="cli-input" className="shrink-0 whitespace-pre text-accent">
            sai@portfolio ${" "}
          </label>
          <input
            id="cli-input"
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </dialog>
  );
}
