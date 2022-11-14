import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/root';
import rootSaga from '../sagas/root';
// Logger with default options
import logger from 'redux-logger'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const configStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, sagaMiddleware)
    )
    // run saga
    sagaMiddleware.run(rootSaga);
    return { store }
}