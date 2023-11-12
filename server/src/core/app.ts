import express, { Express, json } from "express";
import cors from "cors";
import { IHandlerRoute } from "../domain/model/route";
import { initMongoose } from "./mongoose";

/**
 * Creates an application object.
 *
 * @param apiRoutes the public API routes to add to this app.
 */
export async function createApp(apiRoutes: IHandlerRoute[]): Promise<Express> {
  const app = express();
  app.use(cors());
  app.use(json());
  addRoutes(app, apiRoutes);

  initMongoose();

  return app;
}

/**
 * Adds the routes to the Express app.
 */
export function addRoutes(app: Express, routes: IHandlerRoute[]) {
  routes.forEach((route) => {
    let middlewares = route.middlewares || [];
    app[route.method](route.path, middlewares, route.handler);
  });
}
