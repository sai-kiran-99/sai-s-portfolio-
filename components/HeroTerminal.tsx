import { site } from "@/lib/content";
import { HeroSkip } from "./HeroSkip";

const command = "whoami";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function HeroTerminal() {
  return (
    <div className="card">
      <div className="flex h-10 items-center gap-2 border-b border-line px-4">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-surface-2 ring-1 ring-line" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-surface-2 ring-1 ring-line" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-surface-2 ring-1 ring-line" />
        <span className="ml-2 font-mono text-xs text-muted">~/sai</span>
        <HeroSkip />
      </div>
      <div className="p-5 font-mono text-sm leading-7">
        <p className="sr-only">$ whoami</p>
        <p aria-hidden="true">
          <span className="text-accent">$ </span>
          {command.split("").map((ch, i) => (
            <span key={i} className="type-ch" style={{ "--i": i } as React.CSSProperties}>
              {ch}
            </span>
          ))}
        </p>
        <p className="type-line font-semibold" style={delay(900)}>
          {site.name}
        </p>
        <p className="type-line text-muted" style={delay(1150)}>
          {site.title} @ {site.company}
        </p>
        <p className="type-line text-muted" style={delay(1400)}>
          {site.headline}
          <span aria-hidden="true" className="cursor" />
        </p>
      </div>
    </div>
  );
}
