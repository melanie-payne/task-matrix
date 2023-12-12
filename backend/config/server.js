// 1. import libraries
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("../routes/routes"); // Adjust the path based on your project structure
const cors = require("cors");

// 2. Set up CORS
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// 3. connect to MongoDB
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/group-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB :)");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB :(", error);
    // Exit the application if there's an error connecting to MongoDB
    process.exit(1);
  });

// 4. Middleware for parsing JSON requests
app.use(express.json());

// 5. Set up routes
app.use(routes);

// 6. Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// // 1. import libraries
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// var routes = require("../routes/routes");
// const cors = require("cors");

// // fix this part
// app.use(
//   cors({
//     origin: "http://localhost:4200",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

// // 2. start server
// app.listen(4000, function check(error) {
//   if (error) {
//     console.log("there is an error in server :(");
//   } else {
//     console.log("there is no error and server has started :)");
//   }
// });

// // 3. connect to mongoDB
// mongoose.set("strictQuery", false);

// mongoose
//   .connect("mongodb://127.0.0.1:27017/group-project", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connected to mongodb :)");
//   })
//   .catch((error) => {
//     console.log("error connecting to mongodb :(", error);
//   });

// app.use(express.json());
// app.use(routes);
