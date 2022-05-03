import "@testing-library/jest-dom/extend-expect";
import GraphicalShapes from "../components/graphical-elements/graphicalShapes";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const initialState = {
  elements: {
    value: [
      {
        rectangle: {
          x: 100,
          y: 100,
          width: 200,
          height: 40,
          color: "green",
          borderColor: "black",
        },
        text: {
          x: 110,
          y: 110,
          text: "Hello, World!",
          fontSize: 20,
          color: "black",
        },
      },
      {
        oval: {
          x: 1000,
          y: 100,
          width: 200,
          height: 40,
          color: "grey",
          borderColor: "black",
          borderRadius: "50%",
        },
        text: {
          x: 1010,
          y: 110,
          text: "Grey Oval",
          fontSize: 20,
          color: "black",
        },
      },
      {
        square: {
          x: 100,
          y: 200,
          width: 100,
          height: 100,
          color: "red",
          borderColor: "black",
        },
        text: {
          x: 110,
          y: 210,
          text: "Red Square",
          fontSize: 20,
          color: "black",
        },
      },
    ],
  },
};

describe("<GraphicalShapes/>", () => {
 
  const mockStore = configureStore();
  let store = mockStore(initialState);
  render(
    <Provider store={store}>
      <GraphicalShapes />
    </Provider>
  );

  it("checks graphical shapes in the document", async () => {
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    expect(screen.getByText("Red Square")).toBeInTheDocument()
    expect(screen.getByText("Grey Oval")).toBeInTheDocument();
  });

});
