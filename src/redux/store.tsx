import { createStore } from "redux";
import { logger } from "./logger";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(logger(rootReducer), composedEnhancers);
export default store;
