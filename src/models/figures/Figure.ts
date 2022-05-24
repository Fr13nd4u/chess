import logo from "../../assets/black-king.png"
import { Cell } from "../Cell";

export enum FiguresName {
  BISHOP = "Bishop",
  FIGURE = "Figure",
  KING = "King",
  KNIGHT = "Knight",
  PAWN = "Pawn",
  QUEEN = "Queen",
  ROOK = "Rook"
}

export class Figure {
  isPrimary: boolean;
  logo: typeof logo | null;
  cell: Cell;
  name: FiguresName;
  id: number;

  constructor(isPrimary: boolean, cell: Cell) {
    this.isPrimary = isPrimary;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FiguresName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell) : boolean {
    if (target.figure?.isPrimary === this.isPrimary)
      return false;
    if (target.figure?.name === FiguresName.KING)
      return false;
    return true;
  }

  moveFigure(tareget: Cell) {

  }
}