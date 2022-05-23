import React, { FC } from "react";
import styled from "styled-components";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <BoardWrapper>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: calc(64px * 8);
  height: calc(64px * 8);
  display: flex;
  flex-wrap: wrap;
`;

export default BoardComponent;
