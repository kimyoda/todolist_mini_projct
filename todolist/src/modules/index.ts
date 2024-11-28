import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// persist 설정
const persistConfig = {
  key: "todo", // localStorage key
  storage, // localStorage 사용
};

// rootReducer 생성
const rootReducer = combineReducers({
  itemReducer,
});

// 타입 무시하여 persistReducer 사용
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as unknown as any
);

export default persistedReducer;

export type RootState = ReturnType<typeof rootReducer>;
