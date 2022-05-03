import app from "../index.js";
import request from "supertest";
import jsonFileOperationsObj from "../controllers/json-file-op";

describe("APIs endpoint", () => {
  it("Hello World API Request", async () => {
    const result = await request(app).get("/");
    expect(result.text).toEqual("Hello World!");
    expect(result.statusCode).toEqual(200);
  });

  it("read data from json file", async () => {
    const functionNameMock = jest.fn();
    jest
      .spyOn(jsonFileOperationsObj, "readJsonFile")
      .mockImplementation(functionNameMock);

    const result = await request(app).get("/elements");
    expect(result.statusCode).toEqual(200);
  });
});
