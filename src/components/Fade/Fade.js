import React from "react";
import "./Fade.scss";

/**
 * Lightweight replacement for react-reveal Fade.
 * Preserves the API used across the portfolio without insecure legacy peers.
 */
export function Fade({children, left, right, bottom, top}) {
  const direction = left
    ? "left"
    : right
      ? "right"
      : top
        ? "top"
        : bottom
          ? "bottom"
          : "bottom";

  return (
    <div className={`reveal-fade reveal-fade--${direction}`}>{children}</div>
  );
}

export default Fade;
