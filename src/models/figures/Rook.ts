import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-rook.png"
import whiteLogo from "../../assets/white-rook.png"

export class Rook extends Figure {
  constructor(isPrimary: boolean, cell: Cell) {
    super(isPrimary, cell);
    this.logo = isPrimary ? whiteLogo : blackLogo ;
    this.name = FiguresName.ROOK;
  }
}