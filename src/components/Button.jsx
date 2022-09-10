import React from 'react'
import { useStateContext } from '../context/ContextProvider';
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

  const {initialState, setIsClicked} = useStateContext()
  return (
    <button
      onClick={() => setIsClicked(initialState)}
      style={{ color, background: bgColor, borderRadius }}
      className={` text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width} `}
      type="button"
    >
      {text} {icon}
    </button>
  );
};
