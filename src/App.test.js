import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store } from "./store";
import { persistor } from "./store";

test("renders login page without crashing", () => {
  const div = document.createElement("div");
  act(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </React.StrictMode>,
      div
    );
  });
  const button = div.querySelector("a");
  expect(button.textContent).toBe("LOGIN WITH SPOTIFY");
});
