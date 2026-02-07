const express = require("express");
const { PORT } = require("./config/app.config");
const router = require("./routes")

const app = express();

app.use(router);

app.listen(PORT, (e) => {
    console.log(`Running server on port ${PORT}`);
})