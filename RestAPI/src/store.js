import {createStore,combineReducers,applyMiddleware} from 'redux'
import search from './reducers/searchReducer';
import collection from './reducers/collectionReducer';
import thunk from "redux-thunk";
import status from './reducers/statusReducer';
//import ReduxPromise from "redux-promise";  //add for devtools
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({search,collection,status}),{},
composeWithDevTools(applyMiddleware(thunk),))

export default store
