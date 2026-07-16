import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "#111116",
          color: "#A78BFA",
          fontSize: 26,
          fontWeight: 700,
          border: "2px solid #2A2238",
        }}
      >
        CT
      </div>
    ),
    size,
  );
}
