require("dotenv").config();
const express = require("express");
const applyMiddleWares = require("./middleWares/applyMiddleWares");
const connectDB = require("./db/connectDb");
const app = express();
const port = process.env.PORT || 5000;

// routers
const authRoutes = require("./routes/Authentication/authentication");
const trendingRoute = require("./routes/Trendring/trendring");
const publisherRoute = require("./routes/Publisher/publisher");
const allArticlesRoute = require("./routes/AllArticles/allArticles");

// middlewares
applyMiddleWares(app);

// jwt related api
app.use(authRoutes);

// trending article api
app.use(trendingRoute);

// allArticles api
app.use(allArticlesRoute);

// publishers api
app.use(publisherRoute);

// server health check api
app.get("/", (req, res) => {
  res.send("server is running");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find [${req.originalUrl}] on the server`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
