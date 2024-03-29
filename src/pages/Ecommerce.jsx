import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Pie, Button, LineChart, SparkLine, Stacked } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

import product9 from "../data/product9.jpg";

export const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className="m-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-xl">$63,448.76</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              size={"md"}
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => {
            return (
              <div
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
                key={item.title}
              >
                <button
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drow-shadow:xl"
                  style={{ color: item.iconColor, background: item.iconBg }}
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span
                    className={`font-semibold text-sm text-${item.pcColor} ml-2`}
                  >
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm mt-1 text-gray-400 ">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/*revenue Main */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          {/* revenue first line */}
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl ">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl ">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className=" mt-10 flex flex-wrap gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10  ">
              <div>
                <p>
                  <span className="font-semibold text-3xl">93,438</span>
                  <span className="p-1.5 bg-green-400 rounded-full hover:drop-shadow-xl cursor-pointer text-black ml-3">
                    23%
                  </span>
                </p>
                <p className="font-semibold mt-1 text-gray-400">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="font-semibold text-3xl">93,438</span>
                </p>
                <p className="font-semibold mt-1 text-gray-400">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report "
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked width="360px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
