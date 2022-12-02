const express = require("express"),
    path = require("path"),
    app = express(),
    port = 3020;
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => {
    console.log(`server is online on ${port}`);
});
