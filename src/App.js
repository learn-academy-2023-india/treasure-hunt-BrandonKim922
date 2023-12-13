import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const initialBoard =(["?", "?", "?", "?", "?", "?", "?", "?", "?"])

const App = () => {
  const [board, setBoard] = useState([...initialBoard])
  
  console.log("board", board)

  const handleClick = (id) => {
    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)
    // alert(id)
    console.log(treasureLocation)
    console.log(bombLocation)

    if(treasureLocation === id) {
      board[id] = "🌟"
      setBoard([...board])
    }
    else if(bombLocation === treasureLocation ||
       bombLocation === id) {
      board[id] = "💀"
      setBoard([...board])
    }
    else {
      board[id] = "✅"
      setBoard([...board])
    }

  }
  const restartGame = () => {
    setBoard([...initialBoard])
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1> 
        <Square board = {board} 
        handleClick ={handleClick}/>
        <button onClick = {restartGame}><center>Restart Game</center></button>
    </>
  )
}

export default App
