import { use } from "i18next";
import { initReactI18next } from "react-i18next";
import { getQueryParam } from "../utils/url";
import { Language } from "domain/enum/language";
import englishTranslation from "../locale/en.json";
import frenchTranslation from "../locale/fr.json";

export const setUpI18n = () => {
  use(initReactI18next).init({
    resources: {
      [Language.EN]: {
        translation: englishTranslation,
      },
      [Language.FR]: {
        translation: frenchTranslation,
      },
    },
    lng: getQueryParam("language")?.toLowerCase() ?? Language.EN,
    fallbackLng: Language.EN,
  });
};
