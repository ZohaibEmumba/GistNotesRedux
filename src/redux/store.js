import { createStore } from "redux";
import {persistStore} from "redux-persist";
import  persistReducer  from "./reducers/index";

export const store = createStore(
    persistReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const persistor = persistStore(store);

export default {store , persistor};