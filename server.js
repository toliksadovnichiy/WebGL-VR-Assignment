const express = require("express");

const app = express();

app.use("/", express.static("./"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("Server is running on localhost:8080");
});