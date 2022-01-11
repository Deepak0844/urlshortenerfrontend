import axios from "axios";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { URL } from "../Authentication/url";
import { Bar } from "react-chartjs-2";

//chart
export function ChartData() {
  const [value] = useState([]);
  const [months] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/url/data/chart`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        for (const dataObj of res.data) {
          months.push(dataObj.Month);
          value.push(dataObj.count);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [months, value]);

  return (
    <div className="chartContainer">
      {value ? <Chart value={value} months={months} /> : ""}
    </div>
  );
}

function Chart({ value, months }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = months;
  const data = {
    labels,
    datasets: [
      {
        label: "URLs",
        data: value,
        backgroundColor: "#1f497d",
      },
    ],
  };

  return (
    <div className="App">
      <Bar options={options} data={data} />
    </div>
  );
}
