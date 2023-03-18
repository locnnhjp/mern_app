const express = require("express");
const mongoose = require("mongoose");

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:12701/people")
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log(err));

// App initial
const app = express();
const PORT = 5000;

app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Hello World!"
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});