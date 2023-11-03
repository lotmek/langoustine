import { HttpMethods, IHandlerRoute } from "./domain/model/route";
import { cardController } from "./controller/card/card-controller";
import { exampleController } from "./controller/example/example-controller";

export const getAPIRoutes = (): IHandlerRoute[] => {
  return [
    { method: HttpMethods.GET, path: "/", handler: exampleController.getHelloWorld },
    { method: HttpMethods.POST, path: "/v1/cards", handler: cardController.createCard },
  ];
};
