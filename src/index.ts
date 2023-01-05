import express from "express";
import { config } from "dotenv";

const app = express();

const port = process.env.PORT || 7000;

app.get("/", (rea, res) => {
  res.send("glorias a Deus");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
