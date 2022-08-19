import { configureStore } from "@reduxjs/toolkit";

import { configReducers } from "./app/configuration";
import { interactionReducers } from "./analytics/interactions";

export const store = configureStore({
  reducer: {
    config: configReducers,
    interaction: interactionReducers,
  },
});
