import * as React from "react";
import "twin.macro";
import { CreateCardForm } from "./CreateCardForm";
import { useTranslation } from "react-i18next";

export const CreateCard = () => {
  const { t } = useTranslation();

  return (
    <div tw="w-full md:max-w-3xl h-full flex flex-col items-center p-8 m-auto z-10 overflow-y-auto">
      <h1 tw="text-center text-primary m-5 font-semibold">{t("createCard.title")}</h1>
      <CreateCardForm />
    </div>
  );
};
