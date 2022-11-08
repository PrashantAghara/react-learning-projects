import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  SeriesDirective,
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

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ background: "white" }}
      tooltip={{ enable: true }}
    >
      <Inject services={[Legend, Category, Tooltip, StackingColumnSeries]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          <SeriesDirective key={index} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
