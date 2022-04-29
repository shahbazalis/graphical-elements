import jsonFileOperationsObj from "./json-file-op.js";

export const getGraphicalElement = async (req, res) => {
  try {
    const elements = await jsonFileOperationsObj.readJsonFile();
    res.status(200).json(elements);
  } catch (e) {
    console.log("Adding order to system error", e);
  }
};
