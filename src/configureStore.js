import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers/reducer";

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      createLogger({
        collapsed: true
      })
    )
  );
}
