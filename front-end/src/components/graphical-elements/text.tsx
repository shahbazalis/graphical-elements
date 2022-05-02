import { ElementTextInterface } from "../../interfaces/ElementTextInterface";

interface TextData {
  textData: ElementTextInterface;
}
const GraphicalElementText = (props: TextData) => {
  let styleObject = {
    left: props.textData.x + "px",
    top: props.textData.y + "px",
    color: props.textData.color,
    fontSize: props.textData.fontSize,
  };

  return (
    <span style={styleObject}>{props.textData && props.textData.text}</span>
  );
};

export default GraphicalElementText;
