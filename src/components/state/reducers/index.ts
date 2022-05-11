import { combineReducers } from "redux";
import CellReducer from "./cellreducer";


const reducers= combineReducers({
    cell: CellReducer    })

export default reducers

export type RootState = ReturnType <typeof reducers>