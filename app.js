const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middleware/authenticateToken");

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", authRoutes);

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "로그인한 사용자입니다", user: req.user });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 실행중입니다.`);
});
