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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "#0a0b0f",
          color: "#f3f2ee",
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        DV
        <div
          style={{
            width: 26,
            height: 3,
            marginTop: 4,
            background: "linear-gradient(90deg, #ff7a45 0%, #e8467c 48%, #7c8cff 100%)",
          }}
        />
      </div>
    ),
    size,
  );
}
