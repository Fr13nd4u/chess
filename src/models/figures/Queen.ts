import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-queen.png"
import whiteLogo from "../../assets/white-queen.png"

export class Queen extends Figure {
  constructor(isPrimary: boolean, cell: Cell) {
    super(isPrimary, cell);
    this.logo = isPrimary ? whiteLogo : blackLogo ;
    this.name = FiguresName.QUEEN;
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target))
      return false;
    if (this.cell.isEmptyVertical(target))
      return true;
    if (this.cell.isEmptyHorizontal(target))
      return true;
    if (this.cell.isEmptyDiagonal(target))
      return true;
    return false;
  }
}