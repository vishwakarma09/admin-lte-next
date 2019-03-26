const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev, quiet: true });
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/mydb");

nextApp.prepare().then(() => {
    // express code here
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api/photos", require("./routes/photos"));

    app.get("*", (req, res) => {
        return handle(req, res);
    });

    var server = app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`);
    });

    var io = require("socket.io").listen(server);

    require('./server/routes/tictactoe')

    
});
