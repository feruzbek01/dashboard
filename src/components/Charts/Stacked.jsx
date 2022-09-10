import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";

export const Stacked = ({ width, height }) => {

  const {currentMode} = useStateContext()
  return (
    <ChartComponent
    id="charts"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
