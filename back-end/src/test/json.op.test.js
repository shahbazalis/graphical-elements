import jsonFileOperationsObj from "../controllers/json-file-op";

describe("JSON file operations", () => {
  test("read json op file", async () => {
    const mockedJson =
      [{
        "square": {
          "x": 400,
          "y": 200,
          "width": 100,
          "height":100,
          "color": "orange",
          "borderColor": "black"
        },
        "text": {
          "x": 410,
          "y": 210,
          "text": "Orange Square",
          "fontSize": 20,
          "color": "black"
        }
      }];
    jsonFileOperationsObj.readJsonFile = jest
      .fn()
      .mockImplementationOnce(() => mockedJson);
    const expectedData =   [{
        square: {
          "x": 400,
          "y": 200,
          "width": 100,
          "height":100,
          "color": "orange",
          "borderColor": "black"
        },
        text: {
          "x": 410,
          "y": 210,
          "text": "Orange Square",
          "fontSize": 20,
          "color": "black"
        }
      }];
    const result= jsonFileOperationsObj.readJsonFile();
    const readData = JSON.parse(result);
    expect(readData).toEqual(expectedData);
  });

;
});