import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl top-50% rounded-full p-3 hover:bg-light-gray"
      >
        <span
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-1"
          style={{ backgroundColor: dotColor }}
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};
export const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    setIsClicked,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((current) => !current)}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            onClick={() => handleClick("userProfile")}
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          >
            <img className="rounded-full w-8 h-8 " src={avatar} />
            <span className="text-gray-400 text-14">Hi, </span>{" "}
            <span className="text-gray-400 text-14 font-bold ">Michael</span>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};
