import { ImageResponse } from "next/og";
import { loadFont } from "@/lib/fonts";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await loadFont("EBGaramond-Medium.ttf");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F1E6CF",
          color: "#2B1D12",
          fontSize: 15,
          fontFamily: "EB Garamond",
          fontWeight: 500,
          letterSpacing: -0.4,
          position: "relative",
        }}
      >
        HP
        <div
          style={{
            position: "absolute",
            left: 6,
            right: 6,
            bottom: 5,
            height: 1,
            background: "#8E2F1C",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "EB Garamond", data: font, weight: 500, style: "normal" }],
    },
  );
}
