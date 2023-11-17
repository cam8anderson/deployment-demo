const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.listen(4000, () => {
  console.log("this swerver is running on port 4000");
});
