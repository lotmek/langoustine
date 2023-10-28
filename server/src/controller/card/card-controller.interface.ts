import { Request, Response } from "express";

export interface ICardController {
  /**
   * Get a 'full' card containing both the phrase to translate
   * and the translation.
   *
   * @param req request
   * @param res response
   */
  getFullCard(req: Request, res: Response): Promise<void>;

  /**
   * Get a 'side' card containing only the phrase to translate.
   *
   * @param req request
   * @param res response
   */
  getSideCard(req: Request, res: Response): Promise<void>;

  /**
   * Create a card.
   *
   * @param req request
   * @param res response
   */
  createCard(req: Request, res: Response): Promise<void>;
}
