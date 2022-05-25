import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-rook.png"
import whiteLogo from "../../assets/white-rook.png"

export class Rook extends Figure {
  constructor(isWhite: boolean, cell: Cell) {
    super(isWhite, cell);
    this.logo = isWhite ? whiteLogo : blackLogo ;
    this.name = FiguresName.ROOK;
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target))
      return false;
    if (this.cell.isEmptyVertical(target))
      return true;
    if (this.cell.isEmptyHorizontal(target))
      return true;
    return false;
  }
}