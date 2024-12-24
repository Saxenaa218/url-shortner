import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/index.js";
import { dbConnection } from "./utils/dbConnection.js";

dotenv.config();
dbConnection();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use to make express
app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT || 3005, () => {
  console.log(`Server is running on ${PORT}`);
});

export { app };
