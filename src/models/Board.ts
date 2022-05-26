import { Cell } from "./Cell";
import { Bishop } from "./figures/Bishop";
import { Figure } from "./figures/Figure";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];
  lostWhiteFigures: Figure[] = [];
  lostBlackFigures: Figure[] = [];

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
  
  public getCopyBoard () {
    const newBoard = new Board();
    newBoard.lostWhiteFigures = this.lostWhiteFigures;    
    newBoard.lostBlackFigures = this.lostBlackFigures;
    newBoard.cells = this.cells;
    
    return newBoard
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }      
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  private addPawns()  {
    for (let i = 0; i < 8; i++) {
      new Pawn(false, this.getCell(i, 1));
      new Pawn(true, this.getCell(i, 6));
    }
  }

  private addKings() {
    new King(false, this.getCell(4, 0));
    new King(true, this.getCell(4, 7));
  }

  private addQueens() {
    new Queen(false, this.getCell(3, 0));
    new Queen(true, this.getCell(3, 7));
  }

  private addBishops() {
    new Bishop(false, this.getCell(2, 0));
    new Bishop(false, this.getCell(5, 0));
    new Bishop(true, this.getCell(2, 7));
    new Bishop(true, this.getCell(5, 7));
  }

  private addKnights() {
    new Knight(false, this.getCell(1, 0));
    new Knight(false, this.getCell(6, 0));
    new Knight(true, this.getCell(1, 7));
    new Knight(true, this.getCell(6, 7));
  }

  private addRooks() {
    new Rook(false, this.getCell(0, 0));
    new Rook(false, this.getCell(7, 0));
    new Rook(true, this.getCell(0, 7));
    new Rook(true, this.getCell(7, 7));
  }

  public addFigures() {
    this.addPawns();
    this.addKnights();
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addRooks();
  }
}