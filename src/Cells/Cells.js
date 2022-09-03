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
        cellList.push(<input className="cell" key={i} maxLength='1' type='text' data-index={i} data-col={col} data-row={row}/>)     
    }

    /*const element = document.getElementById('clear');
    element.addEventListener('click', clearGrid)*/

    const clearGrid = () => {
        document.getElementById(`sudoku-container`).reset();
    }

    const onSubmit = () => {
        const cells = document.getElementsByClassName('cell');
        const subVals = [];
        for(let j = 0; j < cells.length; j++){
            if(cells[j].value.length === 0){
                subVals.push(0);
            } else if (cells[j].value.length > 0){
                if (isNaN(cells[j].value) || cells[j].value === 0) {
                    alert('Please only enter numbers between 1 and 9')
                } else {
                    subVals.push(cells[j].value);
                    console.log('added!');
                }
            }
            
        }
        console.log(subVals)
        /*cells.forEach(i => {
            if(i.value.length === 0){
                subVals.push(0)
            } else {
                subVals.push(i)
                console.log(subVals)
            }
        })*/
    }

    return (
        <>
            <div className='sudoku-grid'>
                {cellList}
            </div>
            <div className='button-container'>
                {/*<ClearButton />
                <SubmitButton />*/}
                <button id='clear' type='button' className='clear-button' onClick={()=> clearGrid()}>Clear</button>
                <button type='button' onClick={() => onSubmit()}>Solve</button>
            </div>
        </>
        
    )
}

export default Cells;