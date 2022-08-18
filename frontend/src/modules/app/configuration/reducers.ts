import { CaseReducer } from "@reduxjs/toolkit";

import configSlice from "./main";

export const toggleSidebar: CaseReducer = (state) => {
  state.sidebar = !state.sidebar;
};
export const toggleProfile: CaseReducer = (state) => {
  state.profile = !state.profile;
};
export const toggleNotifications: CaseReducer = (state) => {
  state.notifications = !state.notifications;
};
export const toggleToolkit: CaseReducer = (state) => {
  state.toolkit = !state.toolkit;
};

export const { reducer: reducers } = configSlice;
