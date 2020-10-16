const express = require("express");
const cors = require("cors");
const app = express();
const listen_port = 3000;

app.use(cors());
app.use(express.json());

const userRouter = require("./api/router.js");
app.use("/api", userRouter);


app.listen(listen_port, () => {
    console.log("Listening port: " + listen_port);
});