import { Request, Response } from "express";

export interface IExampleController {
  /**
   * Get a 'Hello Word' response
   *
   * @param req request
   * @param res response
   */
  getHelloWorld(req: Request, res: Response): Promise<void>;
}
