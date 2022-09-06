import React from 'react'

export const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button
      style={{ color, background: bgColor, borderRadius }}
      className={` text-${size} p-3 hover:drop-shadow-xl `}
      type="button"
    >
      {text}
    </button>
  );
};
