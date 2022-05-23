import { Board } from "./Board";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly isPrimary: boolean;
  figure: Figure | null;
  board: Board;
  available: boolean; // can the figure move
  id: number; // for react keys

  constructor(board: Board, x: number, y: number, isPrimary: boolean, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.isPrimary = isPrimary;
    this.figure = figure
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }
}