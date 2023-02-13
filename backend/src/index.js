const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("/home",(req, res) => {
    res.send("welcome to web application ");
})

app.listen(PORT, () => {
    console.log(`app is listning on server http://localhost:${PORT}`);
})