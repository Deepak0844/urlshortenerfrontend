import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./authentication.css";

//display message when password changed successfully
export default function PasswordChangedMsg() {
  return (
    <div className="successMessage">
      <CheckCircleRoundedIcon color="success" style={{ fontSize: "55px" }} />
      <h2>Password Updated!</h2>
      <p>
        Your password has been changed successfully Use your new password to log
        in
      </p>
    </div>
  );
}
