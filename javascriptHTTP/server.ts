const express = require("express");
const app = express();
const port: number = 3001;

app.get("/", (req: Request, res: any) => {
  res.send("Hello world");
});

app.post("/hello", (req: Request, res: any) => {
  //Write to database
  res.send(200);
});

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});
