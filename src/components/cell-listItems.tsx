import React from "react";
import {Cell} from '../state'

import CodeCell from'./code-cell'
import TextEdior from './text-editor'

interface CellListItemProps{
    cell: Cell
}

const CellListItem :React.FC <CellListItemProps>= ({cell}) =>{

    let child : JSX.Element
    if (cell.type==='code')
       {child =<CodeCell/>}
    else 
     { child=<TextEdior/>}


    return (<div> {child}</div>)

}

export default CellListItem;