import { Request, Response } from "express";
import { boundClass } from "autobind-decorator";
import { IExampleController } from "./example-controller.interface";

@boundClass
export class ExampleController implements IExampleController {
  public async getHelloWorld(req: Request, res: Response): Promise<void> {
    res.send("Hello World !");
  }
}

// Singleton
export const exampleController = new ExampleController();
