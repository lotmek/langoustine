import express, { Express } from "express";
import { IHandlerRoute } from "../models/route";

/**
 * Creates an application object.
 *
 * @param apiRoutes the public API routes to add to this app.
 */
export async function createApp(apiRoutes: IHandlerRoute[]): Promise<Express> {
  const app = express();

  addRoutes(app, apiRoutes);

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
