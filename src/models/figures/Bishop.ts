import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-bishop.png"
import whiteLogo from "../../assets/white-bishop.png"

export class Bishop extends Figure {
  constructor(isWhite: boolean, cell: Cell) {
    super(isWhite, cell);
    this.logo = isWhite ? whiteLogo : blackLogo ;
    this.name = FiguresName.BISHOP;
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target))
      return false;
    if (this.cell.isEmptyDiagonal(target))
      return true;
    return false;
  }
}