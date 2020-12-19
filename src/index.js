const express = require("express");
const morgan = require("morgan");

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoutes = require("./routes/user.router");
app.use("/api/users", userRoutes);

//Server port
app.listen(app.get("port"), () => {
  console.log(`SERVIDOR EN EL PUERTO ${app.get("port")}`);
});