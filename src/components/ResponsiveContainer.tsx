import { styled } from "../theme";

export const ResponsiveContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 32rem)",
  alignItems: "center",
  justifyContent: "center",
  gap: "3.6rem 4.8rem",
  width: "100%",
});

export default ResponsiveContainer;
