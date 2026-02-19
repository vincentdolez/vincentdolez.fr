import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Vincent Dolez";
  const description =
    searchParams.get("description") ?? "AI Operating Partner";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "#2563EB",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#6B7280",
              letterSpacing: "-0.01em",
            }}
          >
            Vincent Dolez
          </div>

          <div
            style={{
              fontSize: "56px",
              color: "#1A1A1A",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#6B7280",
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
