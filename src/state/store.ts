import { applyMiddleware, legacy_createStore } from "redux";
//import { legacy_createStore as createStore} from 'redux'
//import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from "./action-types";

export const store = legacy_createStore(reducers,{},applyMiddleware(thunk))


store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'code'
    }
})
store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'text'
    }
})
store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'code'
    }
})
store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'text'
    }
})
//console.log(store.getState())