export const RectangleText = () => {
  return (
    <p
      style={{
        position: "absolute",
        left: "110px",
        top:"110px",
        color: "black",
        fontSize: "20px",
      }}
    >
      Hello, World!
    </p>
  );
};
const Rectangle = () => {
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
