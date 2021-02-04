const express = require("express");
const morgan = require("morgan");
require;

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
// const port = process.env.PORT;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoutes = require("./routes/user.router");
const adminRoutes = require("./routes/admin.router");
app.use("/api/users", userRoutes);
app.use("/api/administrator", adminRoutes);

//Server port
app.listen(app.get("port"), () => {
  console.log(`SERVIDOR EN EL PUERTO ${app.get("port")}`);
});
