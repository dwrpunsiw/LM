import { Dispatch } from "@reduxjs/toolkit";

import interactionSlice from "./main";
import { InteractionPayload } from "./reducers";
import axiosClientInstance from "../../../client/http/axios-client";

export type InteractionActionType = typeof interactionSlice.actions;

const interactionActions: InteractionActionType = interactionSlice.actions;

const sendInteractionAnalytics = (interaction: InteractionPayload) => {
  return (dispatch: Dispatch) => {
    // Set last interaction
    dispatch(interactionActions.setInteraction(interaction));

    // Send analytics to the server API
    axiosClientInstance.post(
      process.env.REACT_APP_ENDPOINT_ANALYTICS!,
      undefined,
      {
        params: {
          requestId: interaction.uuid?.toString(),
          requestAt: interaction.sys_creation_date?.toString(),
        },
      }
    );

    // Reset interaction
    dispatch(interactionActions.resetInteraction());
  };
};

export const interactionActionsCreator = { sendInteractionAnalytics };

export const actions = { ...interactionActions };
