import ReactApexCharts from "react-apexcharts";
import { useState } from "react";

const Oneday = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [130.41, 133.95, 135.5, 127.22, 125.51, 130.74, 130.25, 130.95, 135.5, 127.22, 124.51, 122.74, 124.41, 125.95, 123.5, 119.22, 120.51, 121.74, 113.25, 108.95, 110.53, 117.22, 117.51, 121.74],
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
        categories: ["0시", "1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시", "13시", "14시", "15시", "16시", "17시", "18시", "19시", "20시", "21시", "22시", "23시"],
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

export default Oneday;
