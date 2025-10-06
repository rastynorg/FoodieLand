import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style/style.css'
import { BrowserRouter as Browse } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Browse><App /></Browse>);
