import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  authReducer,
  productReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
export default store;
