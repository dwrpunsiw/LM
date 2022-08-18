import { createSlice } from "@reduxjs/toolkit";

type configState = {
  notifications: boolean;
  profile: boolean;
  toolkit: boolean;
};

const configInitialState: configState = {
  profile: false,
  notifications: false,
  toolkit: false,
};

const configSlice = createSlice({
  name: "config",
  initialState: configInitialState,
  reducers: {
    toggleProfile(state) {
      state.profile = !state.profile;
    },
    toggleNotifications(state) {
      state.notifications = !state.notifications;
    },
    toggleToolkit(state) {
      state.toolkit = !state.toolkit;
    },
  },
});

export default configSlice;
