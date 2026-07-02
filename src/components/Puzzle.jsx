// import React from 'react'
import {Chessboard} from 'react-chessboard';
import { useState } from 'react';
import { Chess } from 'chess.js';
import { useEffect } from 'react';

function PuzzleLoad() {
    const puzzle = "8/8/8/3k4/8/4Q3/8/4K3 w - - 0 1"; // starting position

    const [game, setGame] = useState(new Chess(puzzle));

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) {
        return (
            <h1> Hi again! </h1>
        );
    }

    function onDrop(sourceSquare, targetSquare) {
        const gameCopy = new Chess(game.fen());

    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for example simplicity
    });

    if (
        move &&
        move.from === "h1" &&
        move.to === "h7"
    ) {
        alert("Congratulations, I guess. 😪");
    }

    if (move === null) return false; // illegal move

    setGame(gameCopy);
    return true;
  }

  return (
    <div style={{width: "400px", margin: "auto"}}>
        
        <h2>Solve the chezz while we are unload the carrier...</h2>
        
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
}

export default PuzzleLoad