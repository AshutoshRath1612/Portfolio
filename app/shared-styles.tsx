export function paneStyle(visible: boolean): React.CSSProperties {
  return {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
    willChange: "transform, opacity",
  };
}

export const badgeStyle: React.CSSProperties = {
  fontSize: 11,
  color: "#a5b4fc",
  background: "rgba(99,102,241,0.12)",
  border: "1px solid rgba(129,140,248,0.3)",
  padding: "0.4rem 1rem",
  borderRadius: 999,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginBottom: "1.5rem",
  letterSpacing: "0.1em",
};

export const bodyText: React.CSSProperties = {
  color: "#cbd5e1",
  fontSize: "1.1rem",
  fontWeight: 300,
  lineHeight: 1.75,
  margin: 0,
};