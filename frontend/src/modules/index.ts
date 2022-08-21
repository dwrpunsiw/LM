import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { appActions, actionsCreator as appActionsCreator } from "./actions";
import { store } from "./store";
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export { store, appActions, appActionsCreator, useAppSelector, useAppDispatch };
