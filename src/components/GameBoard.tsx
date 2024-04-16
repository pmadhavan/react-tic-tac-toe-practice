import React, { useState } from 'react';

const Cell =({id,value, handleClick}:{id:number, value: string, handleClick: (id:number)=>void}) => {
    return(
<div className='child' role="button" tabIndex={0} id={id.toString()} onKeyDown={()=> handleClick(id)} onClick={()=> handleClick(id)}>{value}</div>
    )
}
const WINNING_COMBO =[[0,1,2], [3,4,5],[6,7,8],
[2,4,6], [0,4,8],[0,3,6],
[1,4,7], [2,5,8]
]
export default function GameBoard(){
    const GRID= Array(9).fill(null);
    const [curPlayer, setCurPlayer] = useState('X');
    const [game, setGame] = useState<string[]>(GRID);
    const isGameOver = () => {
       return game.some((item) => !item) ? false : true;
    }
    const findWinner = () => {
        let winner;
        for(const combo of WINNING_COMBO){
           if( game[combo[0]] === game[combo[1]] && game[combo[1]] === game[combo[2]] ){
            winner = game[combo[1]];
            break;
           }
        }
        return winner;
    }
    let winner =    findWinner();    

    const handleClick =(index:number) => {
    if(game[index] || winner) {
        alert("Not possible move")
        return;
    }
    const nextPlayer = curPlayer === 'X' ? 'O' : 'X';
    const newGame= [...game];
    newGame[index] =curPlayer;
    setCurPlayer(nextPlayer);
    setGame(newGame);
}

return (
<>
<div className='tic-tac-toe parent'>
  
    {GRID.map((item, index) => {
        return (<Cell id={index} key={index} value={game[index]} handleClick={handleClick}/>)
    })
    }
</div>
{}
{winner ? <h2 className='winner'>  Player '{winner}'  won!!</h2>:isGameOver() && <h2 className='gameOver'> Game Over </h2> }

</>)
}