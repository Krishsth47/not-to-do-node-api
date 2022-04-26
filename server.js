import express from "express";
const app = express();

const PORT = 8000;

app.use(express.json());

//load routers
import taskRouter from "./src/routers/taskRouter.js";

//task API
app.use("/api/v1/task", taskRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Your server is running at http://localhost:${PORT}`);
});
