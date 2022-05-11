import { ActionType } from "../action-types";
import { Action } from "../actions";
import {Cell} from '../cell'
import produce from'immer'

interface CellState{
    
    loading : boolean;
    error : string | null;
    order: any[]
    data: {
        [key:string]: Cell;
    }
}

const initialState : CellState = {

    loading : false,
    error :null,
    order:[],
    data :{}
}

const CellReducer =  produce ((state: CellState  ,action :Action) =>{

    switch (action.type){
        case ActionType.UPDATE_CELL:
            const {id ,content} = action.payload
            state.data[id].content=content
            return
            // return {
            //     ... state,
            //     data:{...state.data,
            //           [id]:{...state.data[id],
            //           content}
            //         }
            // }
        case ActionType.DELETE_CELL:
            delete state.data[action.payload];
            state.order = state.order.filter((id) => id !== action.payload);
            return state;
        case ActionType.MOVE_CELL:

            const {direction} = action.payload
            const index = state.order.findIndex(id => id === action.payload.id)
            const targetIndex = direction ==='up' ? index -1 :index-1

            if(targetIndex<0||targetIndex>state.order.length-1){return}
            state.order[index]= state.order[targetIndex];
            state.order[targetIndex]=action.payload.id;
           
            return state;

            case ActionType.INSERT_CELL_BEFORE:

             const cell: Cell ={

                content:'',
                type:action.payload.type,
                id:randomID()
             }
               
             state.data[cell.id] =cell
             const findIndex = state.order.findIndex(id => id === action.payload.id)

             if(findIndex <0)
             {
                 state.order.push(cell.id);}
             else{
                 state.order.splice(findIndex,0,cell.id)
             }
                return state;
    }

    return state;
})

const randomID=() =>{
    return Math.random().toString(36).substring(2,5)
}
export default CellReducer;