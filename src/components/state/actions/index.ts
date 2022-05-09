import { ActionType } from "../action-types"
import {CellTypes} from "../cell"

interface MoveCellAction{
    type:ActionType.MOVE_CELL;
    payload:{
        id:string;
        direction: 'up'|'down';
    };
}
interface UpdateCellAction{
    type: ActionType.UPDATE_CELL;
    payload :{
        id:string;
        content :string
    };
   
}

interface DeletCellAction{
    type: ActionType.DELETE_CELL;
    payload:string;
}

interface InsetCellBeforeAction{
    type:ActionType.INSERT_CELL_BEFORE;
    payload:{
        id:string;
        type: 'code' | 'text';
    };
}

export type Action= MoveCellAction | DeletCellAction | UpdateCellAction |InsetCellBeforeAction;

