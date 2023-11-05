import { use } from "i18next";
import { initReactI18next } from "react-i18next";
import { getQueryParam } from "../utils/url";
import { Language } from "domain/enum/language";

export const setUpI18n = () => {
  use(initReactI18next).init({
    resources: {
      [Language.EN]: {
        translation: {},
      },
      [Language.FR]: {
        translation: {},
      },
    },
    lng: getQueryParam("language")?.toLowerCase() ?? Language.EN,
    fallbackLng: Language.EN,
  });
};
