import { createSlice } from "@reduxjs/toolkit";

import { setInteraction, resetInteraction } from "./reducers";

export type InteractionState = {
  uuid: string | null;
  userId: string | null;
  event: string | null;
  completion: string | null;
  sys_creation_date: Date | null;
};

const interactionInitialState: InteractionState = {
  uuid: null,
  userId: null,
  event: null,
  completion: null,
  sys_creation_date: null,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: interactionInitialState,
  reducers: {
    setInteraction,
    resetInteraction,
  },
});

export default interactionSlice;
