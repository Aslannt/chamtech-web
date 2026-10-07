import { ImageResponse } from "next/og";

export const alt = "Deivid Vanegas - Backend and Integration Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const signal = "linear-gradient(90deg, #ff7a45 0%, #e8467c 48%, #7c8cff 100%)";
const nodes = ["API Consumer", "MuleSoft", "Spring Boot", "PostgreSQL"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0a0b0f",
          backgroundImage:
            "linear-gradient(rgba(169,161,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(169,161,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#f3f2ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#989ba6", fontSize: 20, letterSpacing: 3 }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: "#3ddc97" }} />
            APX DEVELOPER AT NOVATEC · BBVA
          </div>
          <div style={{ color: "#989ba6", fontSize: 20, letterSpacing: 3 }}>BOGOTÁ, COLOMBIA</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#a9a1ff", fontSize: 24, letterSpacing: 5 }}>BACKEND &amp; INTEGRATION DEVELOPER</div>
          <div style={{ fontSize: 112, fontWeight: 300, letterSpacing: -6, lineHeight: 1, marginTop: 18 }}>
            Deivid Vanegas
          </div>
          <div style={{ width: 140, height: 4, background: signal, marginTop: 30 }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {nodes.map((node, index) => (
            <div key={node} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  padding: "12px 20px",
                  border: index === 1 ? "1px solid #a9a1ff" : "1px solid #23262f",
                  background: "#111319",
                  borderRadius: 8,
                  fontSize: 22,
                  color: "#f3f2ee",
                }}
              >
                {node}
              </div>
              {index < nodes.length - 1 ? <div style={{ color: "#a9a1ff", fontSize: 24 }}>→</div> : null}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
