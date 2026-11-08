"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { copyEmail, fuzzyScore, jumpTo, openExternal, toggleTheme } from "@/lib/client";
import { sections, site } from "@/lib/content";

type Command = { id: string; label: string; hint: string; run: () => void };

export default function Palette({ onClose, onTerminal }: { onClose: () => void; onTerminal: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = dialog.current;
    if (el && !el.open) el.showModal();
  }, []);

  const commands = useMemo<Command[]>(
    () => [
      ...sections.map((s) => ({
        id: `go-${s.id}`,
        label: `Go to ${s.label}`,
        hint: "Section",
        run: () => jumpTo(s.id),
      })),
      { id: "resume", label: "Open resume", hint: "PDF", run: () => openExternal(site.resume) },
      { id: "email", label: "Copy email", hint: "Clipboard", run: () => void copyEmail() },
      { id: "github", label: "Open GitHub", hint: "Link", run: () => openExternal(site.github) },
      { id: "linkedin", label: "Open LinkedIn", hint: "Link", run: () => openExternal(site.linkedin) },
      { id: "theme", label: "Toggle theme", hint: "Light or dark", run: toggleTheme },
      { id: "terminal", label: "Open terminal mode", hint: "CLI", run: onTerminal },
    ],
    [onTerminal],
  );

  const results = useMemo(() => {
    if (!query.trim()) return commands;
    return commands
      .map((command) => ({ command, score: fuzzyScore(query.trim(), command.label) }))
      .filter((r) => r.score >= 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.command);
  }, [commands, query]);

  useEffect(() => {
    list.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [active, results]);

  const execute = (command?: Command) => {
    if (!command) return;
    dialog.current?.close();
    command.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const count = results.length;
    if (e.key === "Tab") {
      e.preventDefault(); // the input is the only stop, so focus stays inside the dialog
    } else if (e.key === "ArrowDown" && count) {
      e.preventDefault();
      setActive((a) => (a + 1) % count);
    } else if (e.key === "ArrowUp" && count) {
      e.preventDefault();
      setActive((a) => (a - 1 + count) % count);
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(results[active]);
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      e.stopPropagation();
      dialog.current?.close();
    }
  };

  return (
    <dialog
      ref={dialog}
      className="palette"
      aria-label="Command palette"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialog.current) dialog.current.close();
      }}
    >
      <div onKeyDown={onKeyDown}>
        <input
          autoFocus
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
          aria-label="Search commands"
          placeholder="Type a command…"
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          className="w-full border-b border-line bg-transparent px-4 py-3.5 font-mono text-sm outline-none placeholder:text-muted"
        />
        <ul ref={list} id="palette-list" role="listbox" aria-label="Commands" className="max-h-80 overflow-y-auto p-2">
          {results.map((command, i) => (
            <li
              key={command.id}
              id={`cmd-${command.id}`}
              role="option"
              aria-selected={i === active}
              onPointerMove={() => setActive(i)}
              onClick={() => execute(command)}
              className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm ${
                i === active ? "bg-surface-2" : ""
              }`}
            >
              <span>{command.label}</span>
              <span className="font-mono text-xs text-muted">{command.hint}</span>
            </li>
          ))}
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No matching commands</li>}
        </ul>
      </div>
    </dialog>
  );
}
