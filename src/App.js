import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import KeplerGl from "@kepler.gl/components";
import keplerGlReducer from "@kepler.gl/reducers";

const store = configureStore({
  reducer: {
    keplerGl: keplerGlReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div style={{ height: "100vh" }}>
        <KeplerGl
          id="map"
          width={window.innerWidth}
          height={window.innerHeight}
          mapboxApiAccessToken={null}
          mapStyles={{
            default: {
              id: "osm",
              label: "OpenStreetMap",
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          }}
        />
      </div>
    </Provider>
  );
}

export default App;
