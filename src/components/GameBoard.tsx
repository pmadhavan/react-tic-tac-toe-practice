import React, { useState } from 'react';

export default function GameBoard(){
    const GRID= Array(9).fill(0);
    const [curPlayer, setCurPlayer] = useState('');
const handleClick =(e: React.MouseEvent<HTMLDivElement>) => {
if(curPlayer === 'X') {
    setCurPlayer('O');
    return;
}
    setCurPlayer('X')
}
return (<div className='tic-tac-toe parent'>
    {GRID.map(() => {
        return <div className='child' role="button" onClick={(e: React.MouseEvent<HTMLDivElement>)=> handleClick(e)}>{curPlayer}</div>
    })
    }
</div>)
}