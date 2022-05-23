import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-bishop.png"
import whiteLogo from "../../assets/white-bishop.png"

export class Bishop extends Figure {
  constructor(isPrimary: boolean, cell: Cell) {
    super(isPrimary, cell);
    this.logo = isPrimary ? whiteLogo : blackLogo ;
    this.name = FiguresName.BISHOP;
  }
}