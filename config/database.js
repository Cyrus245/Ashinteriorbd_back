//Database configuration file

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDatabase = () => {
  //   mongoose
  //     .connect(process.env.DB_CONNECTION_STRING, {
  //       // user: process.env.DB_USER,
  //       // pass: process.env.DB_PASSWORD,
  //       // dbName: process.env.DB_NAME,
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     })
  //     .then((con) => {
  //       console.log(
  //         `MongoDB Database connected with HOST: ${con.connection.host}`
  //       );
  //     });

  mongoose
    .connect(
      "mongodb+srv://ashinteriorbd:x4peVyxysycjAKaI@ashcluster.q8bj7.mongodb.net/?retryWrites=true&w=majority&appName=ashCluster&tls=true"
    )
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
