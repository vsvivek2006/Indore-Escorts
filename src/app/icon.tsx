import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32
};
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
          background: "linear-gradient(135deg, #ff007a 0%, #e31777 50%, #8a003f 100%)",
          color: "#ffffff",
          fontSize: 16,
          fontWeight: 900,
          borderRadius: 8,
          border: "1px solid #ffd700",
          letterSpacing: "-0.5px"
        }}
      >
        69
      </div>
    ),
    {
      ...size
    }
  );
}
