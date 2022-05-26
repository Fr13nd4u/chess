import React, { FC } from "react";
import styled from "styled-components";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <Lost>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name} {figure.logo && <LostImg src={figure.logo} alt="" />}
        </div>
      ))}
    </Lost>
  );
};

const Lost = styled.div`
  height: calc(50vh - 60px);
  min-height: 512px;
  padding: 30px;
  margin: 23px -40px 0 50px;
  background: lightgrey;
`;

const LostImg = styled.img`
  height: 20px;
  width: 20px;
`;

export default LostFigures;
