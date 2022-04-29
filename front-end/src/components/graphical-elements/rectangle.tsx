import { useEffect } from "react";

import { getGraphicalElements } from "../../api/graphical-elements-apis";

export const RectangleText = () => {
  return (
    <p
      style={{
        position: "absolute",
        left: "110px",
        top: "110px",
        color: "black",
        fontSize: "20px",
      }}
    >
      Hello, World!
    </p>
  );
};
const Rectangle = () => {
  const graphicalElements = async () => {
    try {
      const elements = await getGraphicalElements();
      console.log(elements);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    graphicalElements();
  }, []);
  return (
    <div
      style={{
        position: "relative",
        left: "100px",
        top: "100px",
        width: "200px",
        height: "40px",
        backgroundColor: "green",
        border: "2px solid black",
      }}
    >
      <RectangleText />
    </div>
  );
};

export default Rectangle;
