import {
  toggleNotifications,
  toggleProfile,
  toggleSidebar,
  toggleToolkit,
} from "./reducers";
import { createSlice } from "@reduxjs/toolkit";

type ConfigState = {
  sidebar: boolean;
  notifications: boolean;
  profile: boolean;
  toolkit: boolean;
};

const configInitialState: ConfigState = {
  sidebar: false,
  profile: false,
  notifications: false,
  toolkit: false,
};

const configSlice = createSlice({
  name: "config",
  initialState: configInitialState,
  reducers: {
    toggleSidebar,
    toggleProfile,
    toggleNotifications,
    toggleToolkit,
  },
});

export default configSlice;
