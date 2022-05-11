import { ActionType } from "../action-types"
import {CellTypes} from "../cell"

export type Direction = 'up'|'down';
export interface MoveCellAction{
    type:ActionType.MOVE_CELL;
    payload:{
        id:string;
        direction: Direction
    };
}
export interface UpdateCellAction{
    type: ActionType.UPDATE_CELL;
    payload :{
        id:string;
        content :string
    };
   
}

export interface DeletCellAction{
    type: ActionType.DELETE_CELL;
    payload: string;
}

export interface InsetCellBeforeAction{
    type:ActionType.INSERT_CELL_BEFORE;
    payload:{
        id:string | null;
        type: 'code' | 'text';
    };
}

export type Action= MoveCellAction | DeletCellAction | UpdateCellAction |InsetCellBeforeAction;

