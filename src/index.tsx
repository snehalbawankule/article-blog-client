import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="838410034439-tquesqjhpdt4dg2816imfkt62m5u18bu.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
