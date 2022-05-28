import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"

export class King extends Figure {
  constructor(isWhite: boolean, cell: Cell) {
    super(isWhite, cell);
    this.logo = isWhite ? whiteLogo : blackLogo ;
    this.name = FiguresName.KING;
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target))
      return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 1) 
    || (dx === -1 && dy === -1) 
    || (dx === 0 && dy === 1) 
    || (dx === 1 && dy === 0);
  }
}