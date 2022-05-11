import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducers";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  categoryReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const composeEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancer);
export const persistor = persistStore(store);
export default store;
