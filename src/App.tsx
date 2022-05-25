import React, { FC, useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";

const App: FC = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(true));
  const [blackPlayer, setBlackPlayer] = useState(new Player(false));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.isWhite ? blackPlayer : whitePlayer);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
