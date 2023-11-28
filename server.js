const express = require("express");

const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "71e8a0e77e9d4cc7945daba29a9bbab8",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.use(express.static(`${__dirname}/public`));

app.listen(4000, () => {
  console.log("this swerver is running on port 4000");
});
