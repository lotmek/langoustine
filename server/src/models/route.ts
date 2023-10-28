import { Request, Response, NextFunction } from "express";

/**
 * The http methods
 */
export enum HttpMethods {
  ALL, // All methods
  GET,
  POST,
  PUT,
  DELETE,
  OPTIONS,
}

/**
 * The base informations of a route.
 */
export interface IRoute {
  /**
   * The HTTP method
   */
  method: HttpMethods;

  /**
   * The *relative* path of the route
   * Example : "/users/search"
   */
  path: string;
}

/**
 * The informations required to build a route, including
 * the handler and the potential middlewares specific to the
 * route.
 */
export interface IHandlerRoute extends IRoute {
  /**
   * The handler function to manage requests to this route.
   */
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  /**
   * Optional. Middlewares to use with this route.
   */
  middlewares?: ((req: Request, res: Response, next: NextFunction) => void)[];
}
