import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Router, Switch } from "wouter";
import CerrarOrden from "./Components/CerrarOrden.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/cerrarOrden" component={CerrarOrden} />
    </Switch>
  </StrictMode>
);
