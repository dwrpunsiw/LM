// action type
import { InteractionActionType } from "./analytics/interactions/actions";
import { ConfigurationActionType } from "./app/configuration/actions";

// actions
import { configActions } from "./app/configuration";
import { interactionActions } from "./analytics/interactions";

// actions creator
import { interactionActionsCreator } from "./analytics/interactions/actions";
import { configurationActionsCreator } from "./app/configuration/actions";

type Actions = InteractionActionType | ConfigurationActionType;

export const actionsCreator = {
  ...interactionActionsCreator,
  ...configurationActionsCreator,
};

export const actions: Actions = { ...configActions, ...interactionActions };
