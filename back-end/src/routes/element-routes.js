import express from "express";
import { getGraphicalElement } from "../controllers/element-controller.js";

const router = express.Router();

router.get("/", getGraphicalElement);

export default router;
