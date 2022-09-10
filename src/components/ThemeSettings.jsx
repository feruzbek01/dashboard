import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../context/ContextProvider";

import { themeColors } from "../data/dummy";
export const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext("");

  return (
    <div
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:bg-light-gray hover:drop-shadow-xl "
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col p-4 ml-4 mr-4 border-t-1 border-color">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light" 
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color ml-4 mr-4 p-4">
          <p className="text-lg font-semibold">Theme Colors</p>

          <div className=" flex justify-between pl-2  pr-2 mt-4">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  onClick={() => {setColor(item.color) }}
                  style={{ borderRadius: "50%", background: item.color }}
                  className={`w-10 h-10 cursor-pointer text-3xl flex items-center justify-center text-white `}
                >
                  {
                    <BsCheck
                      className={`${
                        currentColor === item.color ? "block" : "hidden"
                      }`}
                    />
                  }
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
