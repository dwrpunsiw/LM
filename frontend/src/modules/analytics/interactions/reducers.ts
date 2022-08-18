import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import {
  CONST_UNKNOWN_COMPLETION,
  CONST_UNKNOWN_EVENTS,
  CONST_UNKNOWN_USERID,
} from "./constants";

import { InteractionState } from "./main";

type InteractionPayload = {
  uuid: string | null;
  userId: string | null;
  event: string | null;
  completion: string | null;
};

export const setInteraction: CaseReducer<
  InteractionState,
  PayloadAction<InteractionPayload>
> = (state, action) => {
  let { uuid, userId, event, completion } = action.payload;
  uuid = uuid ? uuid : v4().toString();
  userId = userId ? userId : CONST_UNKNOWN_USERID;
  event = event ? event : CONST_UNKNOWN_EVENTS;
  completion = completion ? completion : CONST_UNKNOWN_COMPLETION;

  state.uuid = uuid;
  state.userId = userId;
  state.event = event;
  state.completion = completion;
  state.sys_creation_date = new Date();
};

export const resetInteraction: CaseReducer<
  InteractionState,
  PayloadAction<InteractionPayload>
> = (state) => {
  state.uuid = null;
  state.userId = null;
  state.event = null;
  state.completion = null;
  state.sys_creation_date = null;
};
