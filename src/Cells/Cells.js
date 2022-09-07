import React from "react";
import './Cells.css';

const Cells = () => {
    const indexToRowCol = (i) => {
        return {row: Math.floor(i/9), col: i%9};
    }

    const rowColToIndex = (row, col) => {
        return row*9 + col;
    }

    const cellArr = new Array(81);
    let cellList = []
    for(let i = 0; i < cellArr.length; i++){
        let { row, col } = indexToRowCol(i);
        cellList.push(<input className="cell" key={i} maxLength='1' type='text' data-index={i} data-col={col} data-row={row}/>)     
    }

    const clearGrid = () => {
        document.getElementById(`sudoku-container`).reset();
    }

    const subVals = [];

    const onSubmit = () => {
        const cells = document.getElementsByClassName('cell');
        for(let j = 0; j < cells.length; j++){
            if(cells[j].value.length === 0){
                subVals.push(0);
            } else if (cells[j].value.length > 0){
                if (isNaN(cells[j].value) || cells[j].value === 0) {
                    alert('Please only enter numbers between 1 and 9')
                } else {
                    subVals.push(cells[j].value);
                }
            }
        }
    }

    //Check if number is already in row, column, or square
    const checkCells = (i, num) => {
        let { row, col } = indexToRowCol(i)

        //check if num is in column
        for(let r = 0; r<9; r++) {
            if(subVals[rowColToIndex(r, col)] == num){
                return false;
            }
        };

        //check if num is in row
        for(let c = 0; c<9; c++) {
            if(subVals[rowColToIndex(row, c)] == num){
                return false;
            }
        };

        //check is number is in 3*3 square
        let ro = Math.floor(row / 3) * 3;
        let co = Math.floor(col / 3) * 3;
        for (let c = co; c < co; c++){
            for(let r = ro; r < ro; ro++){
                if(subVals[rowColToIndex(r, c)] == num){
                    return false;
                }
            }
        }

        //number is not already in row, column, or square so return true
        return true;

    }

    //Use checkCells function to add the possible numbers to an array
    const possibleNumbers = (i) => {
        let possibles = [];
        for (let num = 1; num <= 9; num++){
            if (checkCells(i, num)) {
                possibles.push(num)
            }
        }
    }

    //Use numbers in array determined by possibleNumbers
    const solveSudoku = () => {
        //Add user submitted numbers to array
        onSubmit();

        let i = 0;
        //while there are still cells to fill, and skipping user inputs
        while (i < 81 && subVals[i] !== 0){
            i++
        }

        //all the cells are filled
        if (i == 81) {
            return true;
        }

        let tries = possibleNumbers(i);
        tries?.forEach(t => {
            subVals[i] = t;
            if (solveSudoku(i+1)){
                console.log(subVals)
                return true;
            }
        });

        subVals[i] = 0;
        return false;

    }


    const showSolution = () =>{
        solveSudoku();
        const cells = document.querySelectorAll('input');
        cells?.forEach((cell, i) => cell.value = subVals[i]);

        //reset subVals array
        subVals.length = 0;
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
                <button type='button' onClick={() => showSolution()}>Solve</button>
            </div>
        </>
        
    )
}

export default Cells;