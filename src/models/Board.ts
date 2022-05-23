import { Cell } from "./Cell";
import { Bishop } from "./figures/Bishop";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, false, null)) // black cells
        } else {
          row.push(new Cell(this, j, i, true, null)) // white cells
        }
      }

      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  public addFigures() {
    new Queen(true, this.getCell(3, 6))
    new Pawn(false, this.getCell(2, 4))
    new Bishop(true, this.getCell(6, 0))

  }
}