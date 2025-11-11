import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.json({ message: "Backend working through AWS Load Balancer ✅" });
});

// ✅ Example API
app.get("/api/data", (req, res) => {
  res.json({
    status: "success",
    data: ["Apple", "Banana", "Orange"],
  });
});

// ✅ PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
