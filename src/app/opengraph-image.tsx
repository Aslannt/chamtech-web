import { ImageResponse } from "next/og";

export const alt = "Deivid Vanegas - Backend and Integration Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: 72,
          background: "#070709",
          color: "#F4F4F5",
          border: "1px solid #2A2238",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            Cham<span style={{ color: "#A78BFA" }}>Tech</span>
          </div>
          <div style={{ color: "#A1A1AA", fontSize: 18 }}>PERSONAL SOFTWARE LAB</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -3 }}>Deivid Vanegas</div>
          <div style={{ color: "#A78BFA", fontSize: 36, fontWeight: 600 }}>Backend &amp; Integration Developer</div>
          <div style={{ color: "#A1A1AA", fontSize: 22 }}>Java · Spring Boot · MuleSoft · DataWeave · REST APIs</div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#A1A1AA", fontSize: 18 }}>
          <span>Backend engineering</span><span style={{ color: "#8B5CF6" }}>→</span><span>Enterprise integration</span>
        </div>
      </div>
    ),
    size,
  );
}
