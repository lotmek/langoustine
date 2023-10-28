import http from "http";
import { getAPIRoutes } from "../routes";
import { createApp } from "./app";

let server: http.Server;
/**
 * Start the server
 */
export async function startServer(): Promise<http.Server> {
  const app = await createApp(getAPIRoutes());
  const port = process.env.PORT;

  return await new Promise<http.Server>((resolve, reject) => {
    try {
      server = app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        resolve(server);
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Stops the server.
 */
export async function stopServer() {
  if (server) {
    try {
      server.close();
    } catch (err) {
      console.log(err, `Error closing the server`);
    } finally {
      server = null as any;
    }
  } else {
    console.log(`No server to stop!`);
  }
}
