import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

test("renders login page without crashing", () => {
  const div = document.createElement("div");
  act(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      div
    );
  });
  const button = div.querySelector("a");
  expect(button.textContent).toBe("LOGIN WITH SPOTIFY");
});
