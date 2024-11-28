import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules/index"; // persistedReducer import
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(rootReducer);

export const persistor = persistStore(store);

// React 18에서 사용하는 createRoot 설정
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

// 퍼포먼스 측정 로깅 함수
reportWebVitals();
