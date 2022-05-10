require("./db/connection");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");

const app = express();
const port = process.env.port || 5001;

app.use(express.json());

app.use(movieRouter);

app.listen(port, () => {
    // will log which port the app is trying to listen on.
    console.log(`Listening on port ${port}`);
});