import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { password } = req.body;

  if (password === "Pg@23360900145") {
    return res.status(200).json({ success: true });
  }

  res.status(401).json({ success: false });
});

export default router;