import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import root from '../sagas'
import { combineReducers } from 'redux';
import {imagesReducer} from './ImagesRedux';

const rootReducer = combineReducers({
  imagesReducer
});

const sagaMonitor = null
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware
  )
);

sagaMiddleware.run(root)

export {
  store
};