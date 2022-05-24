import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure {
  constructor(isPrimary: boolean, cell: Cell) {
    super(isPrimary, cell);
    this.logo = isPrimary ? whiteLogo : blackLogo ;
    this.name = FiguresName.PAWN;
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target))
      return false;
    return true;
  }
}