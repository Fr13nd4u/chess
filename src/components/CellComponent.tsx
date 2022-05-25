import React, { FC } from "react";
import styled from "styled-components";
import { Cell } from "../models/Cell";
import { COLORS } from "../styles/theme";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  const CellWrapper: any = selected ? SelectedCell : CellC;

  return (
    <CellWrapper cell={cell} selected={selected} onClick={() => click(cell)}>
      {cell.available && !cell.figure && <Available />}
      {cell.figure?.logo && <Img src={cell.figure.logo} alt="" />}
    </CellWrapper>
  );
};

const CellC = styled.div<CellProps>`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ cell }) =>
    cell.isWhite ? COLORS.PRIMARY : COLORS.SECONDARY};
  background: ${({ cell }) => cell.available && cell.figure && "green"};
`;

const SelectedCell = styled(CellC)`
  background: brown;
`;

const Available = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: green;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  position: relative;
`;

export default CellComponent;
