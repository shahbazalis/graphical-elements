import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JSON_FILE_NAME = "../../graphical-elements.json";

const jsonFileOperationsObj = {
  readJsonFile: async () => {
    try {
      const elements = fs.readFileSync(
        path.resolve(__dirname, JSON_FILE_NAME),
        "utf8"
      );
      return JSON.parse(elements);
    } catch (e) {
      console.log("error reading from json file", e);
    }
  },
};

export default jsonFileOperationsObj;
