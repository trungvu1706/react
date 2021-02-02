import React, { useState } from "react";

export default function WithHoverOpacity(WrappedComponent, opacity = 0.5) {
  const NewComponent = (props) => {
    const [isHover, setHover] = useState(false);

    const onMouseEnter = () => {
      setHover(true);
    };

    const onMouseLeave = () => {
      setHover(false);
    };

    return (
      <div
        className="HoverOpacity"
        style={{
          opacity: isHover ? opacity : 1,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  return NewComponent;
}
