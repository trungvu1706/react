import React, { useState } from "react";

function HoverOpacity({ src, width = 500, height = 300 }) {
  return (
    <div
      className="HoverOpacity"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        borderRadius: `8px`,
      }}
    />
  );
}

export default HoverOpacity;
