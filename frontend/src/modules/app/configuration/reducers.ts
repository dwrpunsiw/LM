import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import configSlice, { BrowserInformationType, ConfigState } from "./main";

export const setBrowserInformation: CaseReducer<
  ConfigState,
  PayloadAction<BrowserInformationType>
> = (state, action) => {
  if (!state.browserInformation) {
    state.browserInformation = { ...action.payload };
  } else {
    state.browserInformation!.name = action.payload.name;
    state.browserInformation!.version = action.payload.version;
    state.browserInformation!.os = action.payload.os;
    state.browserInformation!.versionNumber = action.payload.versionNumber;
  }
};

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
