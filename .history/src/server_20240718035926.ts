import mongoose from "mongoose";
import config from "./config";
import app from "./app";
import { Server } from "http";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    console.log("Database has been connected !");

    //listening the port
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("database won't connect", error);
  }

  /* for gracefully server stop  */
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(0);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on("SIGTERM", () => {
  console.log("sigterm recieved");
  if (server) {
    server.close();
  }
});
