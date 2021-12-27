import "./authentication.css";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { URL } from "./url";

//display message when user clicks a link in available in email
export default function Activate() {
  const { token } = useParams();
  useEffect(() => {
    axios
      .get(`${URL}/user/account-verification/${token}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [token]);
  return (
    <div className="successMessage">
      <CheckCircleRoundedIcon color="success" style={{ fontSize: "55px" }} />
      <h2>Congratulations</h2>
      <p>Your account has been activated successfully.</p>
    </div>
  );
}
