import { applyMiddleware, legacy_createStore } from "redux";
import { legacy_createStore as createStore} from 'redux'
//import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = legacy_createStore(reducers,{},applyMiddleware(thunk))

