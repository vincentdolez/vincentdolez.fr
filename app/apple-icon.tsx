import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a3a1d",
          color: "#c8ff3a",
          fontFamily: "sans-serif",
          fontSize: "100px",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          borderRadius: "32px",
        }}
      >
        VD
      </div>
    ),
    { ...size },
  );
}
