import { places, skills, site } from "@/lib/content";

export function PackageJson() {
  return (
    <div className="card spot reveal">
      <div className="flex h-10 items-center border-b border-line px-4 font-mono text-xs text-muted">package.json</div>
      <pre tabIndex={0} role="region" aria-label="Skills as a package.json file" className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        <code>
          <span className="t-punct">{"{"}</span>
          {"\n  "}
          <span className="t-key">&quot;name&quot;</span>
          <span className="t-punct">: </span>
          <span className="t-str">&quot;{site.name.toLowerCase().replaceAll(" ", "-")}&quot;</span>
          <span className="t-punct">,</span>
          {"\n"}
          {skills.map((block, b) => (
            <span key={block.group}>
              {"  "}
              <span className="t-key">&quot;{block.group}&quot;</span>
              <span className="t-punct">: {"{"}</span>
              {"\n"}
              {block.deps.map((dep, d) => (
                <span key={dep.name} className="dep" data-skill={dep.name} data-uses={dep.places.join(" ")}>
                  <span>{"    "}</span>
                  <span className="t-key">&quot;{dep.name}&quot;</span>
                  <span className="t-punct">: </span>
                  <span className="t-str">&quot;{dep.used}&quot;</span>
                  <span className="t-punct">{d < block.deps.length - 1 ? "," : ""}</span>
                </span>
              ))}
              {"  "}
              <span className="t-punct">
                {"}"}
                {b < skills.length - 1 ? "," : ""}
              </span>
              {"\n"}
            </span>
          ))}
          <span className="t-punct">{"}"}</span>
        </code>
      </pre>
      <div className="border-t border-line p-4">
        <p className="js-only mb-3 text-xs text-muted">Hover a dependency to see where it was used.</p>
        <ul className="flex flex-wrap gap-2 text-xs">
          {places.map((p) => (
            <li key={p.id} data-place={p.id} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono">
              {p.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
