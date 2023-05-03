const express = require("express");
const cors = require('cors');
const v1Router = require("./v1/routes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use("/api/v1/", v1Router);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});