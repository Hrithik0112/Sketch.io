"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export function ReduxProvider({ children }) {
  <Provider store={store}>{children}</Provider>;
}