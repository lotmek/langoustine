import { Request, Response } from "express";
import { boundClass } from "autobind-decorator";
import { ICardController } from "./card-controller.interface";

@boundClass
export class CardController implements ICardController {
  getFullCard(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getSideCard(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  createCard(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

// Singleton
export const cardController = new CardController();
