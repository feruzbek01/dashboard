import React from 'react'

export const Button = ({
  color,
  bgColor,
  bgHoverColor,
  text,
  borderRadius,
  size,
  icon,
  width,
}) => {
  return (
    <button
      style={{ color, background: bgColor, borderRadius }}
      className={` text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width} `}
      type="button"
    >
      {text} {icon}
    </button>
  );
};
