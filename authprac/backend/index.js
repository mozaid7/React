const express = require('express');
const rootRouter = require('./routes/index');
const cors = require("cors");
const dotenv = require('dotenv');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});