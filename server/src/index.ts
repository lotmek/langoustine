import dotenv from "dotenv";
import { startServer } from "./core/server";

dotenv.config();

(async () => {
  try {
    await startServer();
  } catch (err) {
    console.error(`Error starting the application : ${err}`);
    process.exit(-1);
  }
})();
