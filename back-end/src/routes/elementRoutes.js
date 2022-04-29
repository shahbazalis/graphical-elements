import express from "express";
import { getGraphicalElement } from "../controllers/elementController.js";

const router = express.Router();

router.get("/", getGraphicalElement);

export default router;
