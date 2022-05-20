import { Action, 
        Direction ,
        MoveCellAction, 
        DeletCellAction,
        UpdateCellAction,
        InsetCellBeforeAction,
        InsetCellAfterAction,
        BundleStartAction,
        BundleCompleteAction} from "../actions";
import { ActionType } from "../action-types";
import { CellTypes } from "../cell";
import bundle from "../../bundle";
import { Dispatch } from "redux";

export const updateCell =(id:string, content:string ) :UpdateCellAction =>{
    return{

        type:ActionType.UPDATE_CELL,
        payload:{
            id,
            content
        }
    }
}
export const moveCell =(id:string, direction:Direction) :MoveCellAction =>{
    return{
        type:ActionType.MOVE_CELL,
        payload:{
            id,
            direction
        }
    }
}
export const deleteCell =(id:string) :DeletCellAction =>{
    return{
        type:ActionType.DELETE_CELL,
        payload :id
    }
}

export const insertCellBefore =(id:string | null,celltype :CellTypes):InsetCellBeforeAction =>{

    return{
        type: ActionType.INSERT_CELL_BEFORE,
        payload:{
            id,
            type: celltype
        }

    }
}

export const insertCellAfter =(id:string | null,celltype :CellTypes):InsetCellAfterAction =>{

    return{
        type: ActionType.INSERT_CELL_AFTER,
        payload:{
            id,
            type: celltype
        }

    }
}

export const createBundel = (cellId :string , input:string)=>{

    return async (dispatch : Dispatch<Action>)=>{
        dispatch({
            type:ActionType.BUNDLE_START,
            payload:{cellId}
        })

        const result = await bundle(input)

        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload:{ 
                cellId, 
                bundle : result
            }
        })
    }
}

