//import required files and libraries
const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log(`Shutting Down Due to uncaught exception`);
  process.exit(1);
});

// Only load dotenv in development mode
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "config/config.env" });
}

//connect to database
connectDatabase();

const PORT = process.env.PORT || 4000; // Make sure to use the Render provided PORT

const server = app.listen(PORT, () => {
  console.log(
    `Backend Server started on PORT: ${PORT} in ${
      process.env.NODE_ENV || "development"
    }`
  );
});

//handling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log(`Shutting Down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
