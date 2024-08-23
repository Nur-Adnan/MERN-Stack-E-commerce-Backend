import express from "express";
// Importing Routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
const port = 3000;
connectDB();
const app = express();

app.use(express.json());

// Using Routes
app.use("/api/v1/user", userRoute);
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
})

app.listen(port,()=> {
    console.log(`Server listening on http://localhost:${port}`);
})
