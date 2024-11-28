import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import { Storage } from "redux-persist/lib/types";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "todo",
  storage,
};

const rootReducer = combineReducers({ itemReudcer });

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
