import { Action, 
        Direction ,
        MoveCellAction, 
        DeletCellAction,
        UpdateCellAction,
        InsetCellBeforeAction,
        InsetCellAfterAction} from "../actions";
import { ActionType } from "../action-types";
import { CellTypes } from "../cell";

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
