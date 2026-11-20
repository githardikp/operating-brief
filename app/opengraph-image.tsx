import { ImageResponse } from "next/og";
import { loadFont } from "@/lib/fonts";

export const alt = "One advisor for the whole of your business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [regular, italic, medium] = await Promise.all([
    loadFont("EBGaramond-Regular.ttf"),
    loadFont("EBGaramond-Italic.ttf"),
    loadFont("EBGaramond-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#F1E6CF",
          backgroundImage:
            "radial-gradient(ellipse at 50% 40%, rgba(255,250,235,0.7), rgba(241,230,207,0) 58%), radial-gradient(ellipse at 50% 50%, rgba(241,230,207,0) 55%, rgba(120,80,30,0.16) 100%)",
          color: "#2B1D12",
          padding: "72px 76px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 680, justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "EB Garamond",
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: 3.2,
              textTransform: "uppercase",
              color: "#6B5640",
            }}
          >
            Hardik Pandey · Business consultant · Bangalore
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "EB Garamond",
              fontSize: 72,
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: -0.7,
              maxWidth: 660,
            }}
          >
            <span>One advisor for the </span>
            <span style={{ fontStyle: "italic", color: "#8E2F1C" }}>whole</span>
            <span> of your business.</span>
          </div>
          <div style={{ display: "flex", width: 180, height: 1, background: "#CDB994" }} />
        </div>
        <div style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}>
          <svg width="340" height="340" viewBox="0 0 250 270">
            <circle cx="125" cy="140" r="104" fill="none" stroke="#2B1D12" strokeWidth="1.4" />
            <circle cx="125" cy="140" r="90" fill="none" stroke="#2B1D12" strokeWidth="0.7" />
            <circle cx="125" cy="140" r="8" fill="none" stroke="#2B1D12" strokeWidth="0.7" />
            <path
              d="M125 36v14M125 230v14M21 140h14M215 140h14"
              fill="none"
              stroke="#2B1D12"
              strokeWidth="0.7"
              strokeLinecap="round"
            />
            <path d="M125 72 L136 140 L125 208 L114 140 Z" fill="none" stroke="#2B1D12" strokeWidth="1.4" />
            <path d="M125 72 L136 140 L114 140 Z" fill="#2B1D12" opacity="0.85" />
            <path
              d="M150 38 A104 104 0 0 1 226 110"
              fill="none"
              stroke="#8E2F1C"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              strokeLinecap="round"
            />
            <path d="M226 110 l-2 -10 M226 110 l-10 -2" fill="none" stroke="#8E2F1C" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "EB Garamond", data: regular, weight: 400, style: "normal" },
        { name: "EB Garamond", data: italic, weight: 400, style: "italic" },
        { name: "EB Garamond", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
