import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import finalprojectStore from './store/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={finalprojectStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
