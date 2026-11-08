import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0a0c14",
          color: "#e8eaf3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#06b6d4" }}>$ whoami</div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 28 }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 42, marginTop: 20, color: "#a4abc1" }}>
          {site.title} @ {site.company}
        </div>
        <div style={{ display: "flex", width: 280, height: 10, marginTop: 56, background: "#4f46e5" }} />
      </div>
    ),
    size,
  );
}
