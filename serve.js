const express = require("express");
const routes = require("./routes");
const mongoose =  require("mongoose");

mongoose.connect("")

const app = express();
const port = 3333;
app.use(routes);

app.listen(port, () => {
    console.log('backend started att')
});