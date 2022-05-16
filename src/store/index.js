import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import paymentReducer from "./reducers/paymentReducer";
import addressReducer from "./reducers/addressReducer";
import shipmentReducer from "./reducers/shipmentReducer";
import userReducer from "./reducers/userReducer";
import detailOrderReducer from "./reducers/detailOrderReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  userReducer,
  categoryReducer,
  paymentReducer,
  addressReducer,
  shipmentReducer,
  detailOrderReducer,
  orderReducer,
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
