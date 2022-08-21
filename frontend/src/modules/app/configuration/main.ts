import {
  toggleNotifications,
  toggleProfile,
  toggleSidebar,
  toggleToolkit,
  setBrowserInformation,
} from "./reducers";
import { createSlice } from "@reduxjs/toolkit";

export type BrowserInformationType = {
  name: string | null;
  version: string | null;
  versionNumber: string | null;
  os: string | null;
  IPv4: string | null;
  country_code: string | null;
  country_name: string | null;
  city: string | null;
  latitude: string | null;
  longitude: string | null;
  state: string | null;
};

export type ConfigState = {
  browserInformation: BrowserInformationType | null;
  sidebar: boolean;
  notifications: boolean;
  profile: boolean;
  toolkit: boolean;
};

const configInitialState: ConfigState = {
  browserInformation: null,
  sidebar: false,
  profile: false,
  notifications: false,
  toolkit: false,
};

const configSlice = createSlice({
  name: "config",
  initialState: configInitialState,
  reducers: {
    setBrowserInformation,
    toggleSidebar,
    toggleProfile,
    toggleNotifications,
    toggleToolkit,
  },
});

export const reducers = configSlice.reducer;

export default configSlice;
