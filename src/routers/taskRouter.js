import express from "express";
const router = express.Router();

import { getAllTask, insertTask } from "../models/task/TaskList.model.js";

router.get("/", async (req, res) => {
  const result = await getAllTask();
  res.json({
    status: "success",
    message: "Get method",
    result,
  });
});

router.post("/", async (req, res) => {
  const data = req.body;
  //send data to database
  const result = await insertTask(data);
  console.log(result);
  res.json({
    message: "Post method",
    result,
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "Delete method",
  });
});

export default router;
