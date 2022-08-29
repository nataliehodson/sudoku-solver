import React from "react";
import './Cells.css';

const Cells = () => {
    const calculateIndex = (i) => {
        return {row: Math.floor(i/9), col: i%9};
    }

        const cellArr = new Array(81);
        let cellList = []
        for(let i = 0; i < cellArr.length; i++){
            let { row, col } = calculateIndex(i);
            cellList.push(<input className="cell" key={i} maxLength='1' type='text' data-index={i} data-col={col} data-row={row} />)
            
        }

    return (
        <>
            {cellList}
        </>
        /*<div className="cell-cotainer">*/
            
        /*</div>*/
    )
}

export default Cells;