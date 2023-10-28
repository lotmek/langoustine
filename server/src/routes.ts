import { exampleController } from "./controller/example/example-controller";
import { HttpMethods, IHandlerRoute } from "./models/route";

export const getAPIRoutes = (): IHandlerRoute[] => {
  return [{ method: HttpMethods.GET, path: "/", handler: exampleController.getHelloWorld }];
};
