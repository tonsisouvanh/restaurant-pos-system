import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";

import global_en from "./translations/en/global_en.json";
import global_la from "./translations/la/global_la.json";
import global_vn from "./translations/vn/global_vn.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    vn: {
      global: global_vn,
    },
    la: {
      global: global_la,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
