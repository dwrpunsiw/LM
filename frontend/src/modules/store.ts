import { configureStore } from "@reduxjs/toolkit";

import { configReducers } from "./configuration";

export const store = configureStore({
  reducer: {
    config: configReducers,
  },
});
