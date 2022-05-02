import { useEffect } from "react";

import { Provider } from "react-redux";
import { useDispatch } from "react-redux";

import GraphicalShapes from "./components/graphical-elements/graphicalShapes";
import { getGraphicalElements } from "./api/graphical-elements-apis";
import { loadData } from "./redux/elements-slice";
import { GraphicalElementsInterface } from "./interfaces/GraphicalElementsInterface";
import { store } from "./store";

import "./App.css";

const GraphicalElementsWrapper = () => {
  const dispatch = useDispatch();

  const setGraphicalData = (dataArray: GraphicalElementsInterface) => {
    dispatch(loadData(dataArray));
  };
  useEffect(() => {
    (async () => {
      // Code that runs in your function
      try {
        const response = await getGraphicalElements();
        setGraphicalData({ value: response });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Graphical Elements</h1>
      <GraphicalShapes />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <GraphicalElementsWrapper />
    </Provider>
  );
};

export default App;
