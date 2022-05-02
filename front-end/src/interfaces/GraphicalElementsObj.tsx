import { RectangleInterface } from "./RectangleInterface";
import { OvalInterface } from "./OvalInterface";
import { SquareInterface } from "./SquareInterface";
import { ElementTextInterface } from "./ElementTextInterface";
export interface GraphicalElementsObj {
  rectangle: RectangleInterface;
  oval: OvalInterface;
  square: SquareInterface;
  text: ElementTextInterface;
}
