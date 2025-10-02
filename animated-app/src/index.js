import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import Stairs from "./components/common/Stairs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Stairs>
      <App />
    </Stairs>
  </BrowserRouter>
);
