import { OvalObj } from "../../interfaces/OvalObj";
import GraphicalElementText from "./text";

interface OvalShapeData {
  data: OvalObj;
}

const Oval = (props: OvalShapeData) => {
  let styleObject = {
    left: props.data.oval.x + "px",
    top: props.data.oval.y + "px",
    width: props.data.oval.width + "px",
    height: props.data.oval.height + "px",
    backgroundColor: props.data.oval.color,
    border: `2px solid ${props.data.oval.borderColor}`,
    borderRadius: props.data.oval.borderRadius,
    position: "absolute",
    content: "width=device-width, initial-scale=1.0",
  };

  return (
    <div
      data-testid="oval"
      // @ts-ignore
      style={styleObject}
    >
      <GraphicalElementText textData={props.data.text} />
    </div>
  );
};

export default Oval;
