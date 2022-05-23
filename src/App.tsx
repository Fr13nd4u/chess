import React, { FC, useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";

const App: FC = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <BoardComponent board={board} setBoard={setBoard} />
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
