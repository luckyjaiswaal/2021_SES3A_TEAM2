import React from  "react";
import {
  StockChart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem
} from "@progress/kendo-react-charts";
import "hammerjs";

const CustomStockChart = props => {
  return (
    <StockChart>
      <ChartTitle text={title} />
      <ChartSeries>
        <ChartSeriesItem data={massagedData}
                         type="candlestick"
                         openField="Open"
                         closeField="Close"
                         lowField="Low"
                         highField="High"
                         categoryField="Date" />
      </ChartSeries>
    <ChartNavigator>
      <ChartNavigatorSelect from={from} to={to} />
      <ChartNavigatorSeries>
        <ChartNavigatorSeriesItem data={massagedData}
                                  type="area"
                                  field="Close"
                                  categoryField="Date" />
        </ChartNavigatorSeries>
      </ChartNavigator>
    </StockChart>
  );
};

export default CustomStockChart;