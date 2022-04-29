import express from "express";
import cors from "cors";
const app = express();
import elementRoutes from "./routes/elementRoutes.js";

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/elements", elementRoutes);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
