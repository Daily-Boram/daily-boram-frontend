import ReactApexCharts from "react-apexcharts";
import { useState } from "react";

const Sevenday = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [130.41, 103.95, 135.5, 107.22, 120.51, 131.74, 103.25],
      },
    ],
    options: {
      chart: {
        height: 350,  
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["일", "월", "화", "수", "목", "금", "토"],
      },
    },
  });
  return (
    <>
      <div id="chart">
        <ReactApexCharts
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default Sevenday;
