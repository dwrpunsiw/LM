import { configureStore } from "@reduxjs/toolkit";

import { configReducers } from "./app/configuration";

export const store = configureStore({
  reducer: {
    config: configReducers,
  },
});
