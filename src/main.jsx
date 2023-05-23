import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { DestinationInfo, Login, Signup, TravelGuide } from "./pages";

// store
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/odyssey/" element={<App />} />
            <Route
              path="/odyssey/destination/:id"
              element={<DestinationInfo />}
            />
            <Route
              path="/odyssey/destination"
              element={<TravelGuide />}
            />
            <Route path="/odyssey/login" element={<Login />} />
            <Route path="/odyssey/signup" element={<Signup />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
