import { ImageResponse } from "next/og";

export const alt = "Phronesis — practical wisdom for AI agent systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1a1a17 0%, #221f17 60%, #2a2417 100%)",
        color: "#f5f3eb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 999,
            border: "2px solid rgba(245, 233, 200, 0.45)",
            color: "#f5e9c8",
            fontSize: 36,
            fontWeight: 600,
          }}
        >
          φ
        </div>
        <span
          style={{
            fontSize: 26,
            color: "#e9e4d4",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          Phronesis
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <h1
          style={{
            fontSize: 84,
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 980,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#fafaf3",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Practical wisdom for AI agent systems.
        </h1>
        <p
          style={{
            fontSize: 28,
            margin: 0,
            maxWidth: 880,
            color: "#c4bda8",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            lineHeight: 1.4,
          }}
        >
          Open source Python framework. Typed contracts. Composable pipelines. Observability built
          in.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 18,
          color: "#a39a82",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
        }}
      >
        <span>phronesis-framework.com</span>
        <span>Apache 2.0 · Early alpha</span>
      </div>
    </div>,
    { ...size },
  );
}
