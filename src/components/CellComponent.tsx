import React, { FC } from "react";
import styled from "styled-components";
import { Cell } from "../models/Cell";
import { COLORS } from "../styles/theme";

interface CellProps {
  cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <CellWrapper cell={cell}>
      {cell.figure?.logo && <Img src={cell.figure.logo} alt="" />}
    </CellWrapper>
  );
};

const CellWrapper = styled.div<CellProps>`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.cell.isPrimary ? COLORS.PRIMARY : COLORS.SECONDARY};
  color: ${(props) =>
    props.cell.isPrimary ? COLORS.SECONDARY : COLORS.PRIMARY};
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  position: relative;
`;

export default CellComponent;
