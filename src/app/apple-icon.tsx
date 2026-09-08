import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "linear-gradient(135deg, #ff007a 0%, #e31777 50%, #8a003f 100%)",
          color: "#ffffff",
          borderRadius: 36,
          border: "4px solid #ffd700"
        }}
      >
        <div style={{ fontSize: 36, color: "#ffd700", marginBottom: -6 }}>👑</div>
        <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: "-2px" }}>69</div>
      </div>
    ),
    {
      ...size
    }
  );
}
