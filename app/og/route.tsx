import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Vincent Dolez";
  const description =
    searchParams.get("description") ?? "Référent IA externalisé pour PME-PMI";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#fdfcf6",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Acid leaf glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 40%, #c8ff3a 0%, transparent 60%)",
            opacity: 0.5,
          }}
        />

        {/* Forêt orbit — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -160,
            width: 540,
            height: 540,
            border: "2px solid #0a3a1d",
            borderRadius: "50%",
            opacity: 0.12,
            display: "flex",
          }}
        />

        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#0a3a1d",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#0a3a1d",
              color: "#c8ff3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.05em",
            }}
          >
            VD
          </div>
          vincent dolez
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              color: "#0a3a1d",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#344139",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {description}
          </div>
        </div>

        {/* Locality */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#1f6b3d",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div style={{ width: 32, height: 1, background: "#1f6b3d" }} />
          Vannes · Bretagne · France entière
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
