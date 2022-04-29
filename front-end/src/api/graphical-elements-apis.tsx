import axios from "axios";
import { baseUrl } from "../constants/constant";

export const getGraphicalElements = async () => {
  try {
    const elements = await axios.get(baseUrl);
    return elements.data;
  } catch (error) {
    throw error;
  }
};
