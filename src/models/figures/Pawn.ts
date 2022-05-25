/* eslint-disable no-mixed-operators */
import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure {

  isFirstStep: boolean = true;

  constructor(isWhite: boolean, cell: Cell) {
    super(isWhite, cell);
    this.logo = isWhite ? whiteLogo : blackLogo ;
    this.name = FiguresName.PAWN;
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target))
      return false;
    const direction = this.cell.figure?.isWhite ? -1 : 1;
    const firstStepDirection = this.cell.figure?.isWhite ? -2 : 2;

    if ((target.y === this.cell.y + direction // if it`s not first step
      || this.isFirstStep
      && (target.y === this.cell.y + firstStepDirection)) // if it`s a first step
      && target.x === this.cell.x // only for 1 x coordinate
      && this.cell.board.getCell(target.x, target.y).isEmpty()) {

      return true
    }

    if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)) {
        return true;
      }

    return false;
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}