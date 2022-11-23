import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/style/tailwindcss/output.css";
import { store } from "./config/store/store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
