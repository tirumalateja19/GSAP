import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import Stairs from "./components/common/Stairs";
import NavContext from "./components/context/NavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Stairs>
      <NavContext>
        <App />
      </NavContext>
    </Stairs>
  </BrowserRouter>
);
