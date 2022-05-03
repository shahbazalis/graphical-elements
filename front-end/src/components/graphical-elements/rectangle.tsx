import { RectangleObj } from "../../interfaces/RectangleObj";
import GraphicalElementText from "./text";

interface RectangleShapeData {
  data: RectangleObj;
}
const Rectangle = (props: RectangleShapeData) => {
  let styleObject = {
    left: props.data.rectangle.x + "px",
    top: props.data.rectangle.y + "px",
    width: props.data.rectangle.width + "px",
    height: props.data.rectangle.height + "px",
    backgroundColor: props.data.rectangle.color,
    border: `2px solid ${props.data.rectangle.borderColor}`,
    position: "absolute",
  };

  return (
    <div
      data-testid="login-btn"
      // @ts-ignore
      style={styleObject}
    >
      <GraphicalElementText textData={props.data.text} />
    </div>
  );
};

export default Rectangle;
