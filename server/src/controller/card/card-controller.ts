import { Request, Response } from "express";
import { boundClass } from "autobind-decorator";
import Joi from "joi";
import { ICardController } from "./card-controller.interface";
import { FullCard } from "domain/model/card";
import { Language } from "domain/enum/language";
import { cardService } from "service/card/card-service";

@boundClass
export class CardController implements ICardController {
  public async getFullCard(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async getRandomFullCards(req: Request, res: Response): Promise<void> {
    const { error, value: limit } = Joi.number().validate(req.query.limit);
    if (error) {
      res.status(400).json({
        message: "Invalid request",
        errors: error.details,
      });
      return;
    }

    const cards = await cardService.getRandomFullCards(limit);
    res.status(200).json(cards);
  }

  public async getSideCard(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async createCard(req: Request, res: Response): Promise<void> {
    const { error, value } = this.fullCardBodySchema.validate(req.body);

    if (error) {
      res.status(400).json({
        message: "Invalid request",
        errors: error.details,
      });
      return;
    }

    const card = await cardService.createCard(value);
    res.status(201).json(card);
  }

  private fullCardBodySchema = Joi.object<FullCard>().keys({
    id: Joi.string(),
    input: Joi.string().required(),
    inputLanguage: Joi.string()
      .valid(...Object.values(Language))
      .required(),
    inputExample: Joi.string().required(),
    inputDefinition: Joi.string(),
    outputLanguage: Joi.string()
      .valid(...Object.values(Language))
      .required(),
    imageUrl: Joi.string().uri(), // Verify if the URL is valid
    output: Joi.string().required(),
    outputExample: Joi.string().required(),
  });
}

// Singleton
export const cardController = new CardController();
