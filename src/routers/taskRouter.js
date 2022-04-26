import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Get method",
  });
});

router.post("/", (req, res) => {
  const data = req.body;
  res.json({
    message: "Post method",
    data,
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "Delete method",
  });
});

export default router;
