import { Dispatch } from "@reduxjs/toolkit";

import configSlice, { BrowserInformationType } from "./main";
import { getHostLocation } from "../../../services/browser-location/location";
import { hostAndBrowserInformation } from "../../../utils/browser-utils";

export type ConfigurationActionType = typeof configSlice.actions;

const configActions: ConfigurationActionType = configSlice.actions;

const getBrowserInformation = () => {
  return (dispatch: Dispatch) => {
    getHostLocation(hostAndBrowserInformation).then(
      (data: BrowserInformationType) => {
        dispatch(configActions.setBrowserInformation(data));
      }
    );
  };
};

export const configurationActionsCreator = { getBrowserInformation };

export const actions = { ...configActions };
