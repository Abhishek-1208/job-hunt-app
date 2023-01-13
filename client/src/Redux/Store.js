import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { JobsReducer } from "./Reducers/JobsReducer";
import { loaderReducer } from "./Reducers/loaderReducer";
import { UsersReducer } from "./Reducers/UsersReducer";
const rootReducer = combineReducers({
  JobsReducer: JobsReducer,
  loaderReducer: loaderReducer,
  UsersReducer: UsersReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
