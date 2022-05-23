import { Cell } from "../Cell";
import { Figure, FiguresName } from "./Figure";
import blackLogo from "../../assets/black-knight.png"
import whiteLogo from "../../assets/white-knight.png"

export class Knight extends Figure {
  constructor(isPrimary: boolean, cell: Cell) {
    super(isPrimary, cell);
    this.logo = isPrimary ? whiteLogo : blackLogo ;
    this.name = FiguresName.KNIGHT;
  }
}