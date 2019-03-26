import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import apiSaga from "../sagas/api-sagas";
import createSagaMiddleware from "redux-saga";

const initialSagaMiddleWare = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, initialSagaMiddleWare))
    );

initialSagaMiddleWare.run(apiSaga);

export default store;