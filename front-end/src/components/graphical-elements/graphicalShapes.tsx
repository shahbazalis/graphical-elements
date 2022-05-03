import { useAppSelector } from "../../hooks";
import Rectangle from "./rectangle";
import Oval from "./oval";
import Square from "./square";

const GraphicalShapes = () => {
  // Other code such as selectors can use the imported `RootState` type
  const graphicalElements = useAppSelector((state) => state.elements.value);
  console.log(graphicalElements);
  return (
    <div>
      {graphicalElements.map((element, key) =>
        element.rectangle ? (
          <Rectangle key={key} data={element} />
        ) : element.oval ? (
          <Oval key={key} data={element} />
        ) : (
          <Square key={key} data={element} />
        )
      )}
    </div>
  );
};

export default GraphicalShapes;
