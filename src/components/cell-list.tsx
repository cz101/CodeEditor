import React from "react";
import {Fragment} from "react"
import {useTypedSelector} from '../hooks/use-typed-selector'
import CellListItem from "./cell-listItems";
import AddCell from "./add-cell"

const CellList :React.FC = () =>{

   const cells = useTypedSelector(({cells : {order,data}})=>{ return order.map((id)=>{
     return data[id]
    })})
  
    const renderedCells =cells.map((cell)=>(
       <Fragment key ={cell.id}>
        <CellListItem  cell = {cell}/>
        <AddCell previousCellid= {cell.id}/>

      </Fragment> 
      ))
    
   // const renderedCells =cells.map((cell)=>(<CellListItem key ={cell.id} cell = {cell}/>))

    return (
      <div> 
          <AddCell forceVisiable={cells.length===0} previousCellid={null} />
          {renderedCells}
        </div>
    )

}

export default CellList;