import { SquareObj } from "../../interfaces/SquareObj";
import GraphicalElementText from "./text";

interface SquareShapeData {
  data: SquareObj;
}
const Square = (props: SquareShapeData) => {
  let styleObject = {
    left: props.data.square.x + "px",
    top: props.data.square.y + "px",
    width: props.data.square.width + "px",
    height: props.data.square.height + "px",
    backgroundColor: props.data.square.color,
    border: `2px solid ${props.data.square.borderColor}`,
    position: "absolute",
  };

  return (
    <div
      data-testid="square"
      // @ts-ignore
      style={styleObject}
    >
      <GraphicalElementText textData={props.data.text} />
    </div>
  );
};

export default Square;
