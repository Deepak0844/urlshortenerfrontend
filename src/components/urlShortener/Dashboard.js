import axios from "axios";
import { useEffect, useState } from "react";
import "./dashboard.css";
import { PageHeader } from "antd";
import { URL } from "../Authentication/url";
import { ChartData } from "./ChartData";

//Dashboard
export default function Dashboard() {
  const [createdPerDay, setcreatedPerDay] = useState([]);
  const [createdThisMonth, setcreatedThismonth] = useState([]);
  const [data, setData] = useState([""]);
  useEffect(() => {
    axios
      .get(`${URL}/url`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get(`${URL}/url/created/perday`)
      .then((res) => {
        setcreatedPerDay(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get(`${URL}/url/created/permonth`)
      .then((res) => {
        setcreatedThismonth(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const totalClick = data.reduce(
    (total, count) => parseInt(total + count.clickCount),
    0
  );
  return (
    <section>
      <PageHeader
        className="site-page-header"
        title="Dashboard"
        style={{
          margin: 10,
          paddingTop: 40,
          paddingBottom: 0,
          background: "white",
        }}
      />
      {/* card-1 */}
      <div className="cardContainer">
        <div className="card1">
          <div className="mainCardContent">
            <div className="content">
              <h6>Total hits</h6>
              <h3> {totalClick}</h3>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card2">
          <div className="mainCardContent">
            <div className="content">
              <h6>Total URLs</h6>
              <h3>{data.length}</h3>
            </div>
          </div>
        </div>

        {/* card-3 */}
        <div className="card3">
          <div className="mainCardContent">
            <div className="content">
              <h6>Today URLs</h6>
              <h3>{createdPerDay.length}</h3>
            </div>
          </div>
        </div>

        {/* card-4 */}
        <div className="card4">
          <div className="mainCardContent">
            <div className="content">
              <h6>Current Month URLs</h6>
              <h3>{createdThisMonth.length}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="Chart">
        <ChartData />
      </div>
    </section>
  );
}
