import express from "express";
// Importing Routes
import userRoute from "./routes/user.js";
const port = 3000;
const app = express();

// Using Routes
app.use("/api/v1/user", userRoute);
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
})

app.listen(port,()=> {
    console.log(`Server listening on http://localhost:${port}`);
})
